import { useEffect, useState } from "react";

export interface NowPlaying {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  url: string;
  /** present when falling back to recently-played */
  playedAt?: string;
}

export type NowPlayingState =
  | { status: "loading" }
  | { status: "ok"; data: NowPlaying }
  | { status: "unavailable" };

const POLL_MS = 30_000;

export function useNowPlaying(): NowPlayingState {
  const [state, setState] = useState<NowPlayingState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/now-playing");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as NowPlaying | null;
        if (!cancelled) {
          setState(data ? { status: "ok", data } : { status: "unavailable" });
        }
      } catch {
        if (!cancelled) setState({ status: "unavailable" });
      }
    }

    load();
    const id = setInterval(load, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return state;
}
