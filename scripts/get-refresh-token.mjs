/**
 * One-time helper: obtains a Spotify refresh token and saves it to .env.
 *
 * 1. In your Spotify app settings, add redirect URI: http://127.0.0.1:3000/callback
 * 2. Put SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env
 * 3. Run:  node scripts/get-refresh-token.mjs
 * 4. Open the printed URL, click Agree — done. Token is written to .env.
 */
import http from "node:http";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ENV_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../.env"
);

function parseEnv(text) {
  const out = {};
  for (const line of text.split("\n")) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m) out[m[1]] = m[2];
  }
  return out;
}

const envText = readFileSync(ENV_PATH, "utf8");
const env = parseEnv(envText);
const CLIENT_ID = env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = "http://127.0.0.1:3000/callback";
const SCOPES = "user-read-currently-playing user-read-recently-played";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Fill SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env first.");
  process.exit(1);
}

const authUrl =
  "https://accounts.spotify.com/authorize?" +
  new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
  });

function saveToken(token) {
  let next;
  if (/^SPOTIFY_REFRESH_TOKEN=.*$/m.test(envText)) {
    next = envText.replace(/^SPOTIFY_REFRESH_TOKEN=.*$/m, `SPOTIFY_REFRESH_TOKEN=${token}`);
  } else {
    next = envText.trimEnd() + `\nSPOTIFY_REFRESH_TOKEN=${token}\n`;
  }
  writeFileSync(ENV_PATH, next);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://127.0.0.1:3000");
  if (url.pathname !== "/callback") {
    res.writeHead(404).end();
    return;
  }
  const code = url.searchParams.get("code");
  if (!code) {
    res.writeHead(400).end("No code in callback.");
    return;
  }

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const json = await tokenRes.json();
  if (json.refresh_token) {
    saveToken(json.refresh_token);
    console.log("\n✓ Refresh token saved to .env (SPOTIFY_REFRESH_TOKEN).");
    console.log("  Copy the three SPOTIFY_* values into Vercel env vars when deploying.");
    res.end("Done — refresh token saved to .env. You can close this tab.");
  } else {
    console.error("Token exchange failed:", json);
    res.writeHead(500).end("Token exchange failed — see terminal.");
  }
  server.close();
});

server.listen(3000, "127.0.0.1", () => {
  console.log("1. Open this URL in your browser:\n");
  console.log(authUrl.toString());
  console.log("\n2. Click Agree — the token will be saved automatically.");
});
