import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Vercel serverless function: GET /api/now-playing
 *
 * Secrets (server-only, set in Vercel env vars — never VITE_*):
 *   SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN
 *
 * Behavior:
 *   - Refreshes the access token (cached in module scope across warm invocations)
 *   - Tries currently-playing; on 204/empty falls back to recently-played
 *   - Returns a flat, client-friendly shape; caches at the edge for 30s
 */

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.value;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Spotify env vars");
  }

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });
  if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`);

  const json = (await res.json()) as {
    access_token: string;
    expires_in: number;
  };
  cachedToken = {
    value: json.access_token,
    expiresAt: Date.now() + json.expires_in * 1000,
  };
  return json.access_token;
}

interface SpotifyTrack {
  name: string;
  external_urls: { spotify: string };
  artists: { name: string }[];
  album: { name: string; images: { url: string }[] };
}

function shape(track: SpotifyTrack, isPlaying: boolean, playedAt?: string) {
  return {
    isPlaying,
    title: track.name,
    artist: track.artists.map((a) => a.name).join(", "),
    album: track.album.name,
    albumArt: track.album.images[0]?.url ?? "",
    url: track.external_urls.spotify,
    ...(playedAt ? { playedAt } : {}),
  };
}

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  try {
    const token = await getAccessToken();
    const auth = { Authorization: `Bearer ${token}` };

    res.setHeader(
      "Cache-Control",
      "s-maxage=30, stale-while-revalidate=60"
    );

    // 1) Currently playing — 204 means nothing is playing (empty body!)
    const nowRes = await fetch(NOW_PLAYING_URL, { headers: auth });
    if (nowRes.status === 200) {
      const json = (await nowRes.json()) as {
        is_playing: boolean;
        currently_playing_type: string;
        item: SpotifyTrack | null;
      };
      if (json.item && json.currently_playing_type === "track") {
        return res.status(200).json(shape(json.item, json.is_playing));
      }
    }

    // 2) Fallback: most recently played track
    const recentRes = await fetch(RECENTLY_PLAYED_URL, { headers: auth });
    if (recentRes.ok) {
      const json = (await recentRes.json()) as {
        items: { track: SpotifyTrack; played_at: string }[];
      };
      const item = json.items[0];
      if (item) {
        return res
          .status(200)
          .json(shape(item.track, false, item.played_at));
      }
    }

    return res.status(200).json(null);
  } catch (err) {
    console.error(err);
    // Client treats any failure as "unavailable" — don't leak details
    return res.status(200).json(null);
  }
}
