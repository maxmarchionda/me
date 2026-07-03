import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Dev-only mock for /api/now-playing.
 * `vite dev` doesn't run Vercel functions; this keeps the Spotify card
 * working locally. Use `vercel dev` to exercise the real function.
 */
function mockNowPlaying(): Plugin {
  return {
    name: "mock-now-playing",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/now-playing", (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            isPlaying: true,
            title: "Mock Song (dev only)",
            artist: "Local Dev",
            album: "vite.config.ts",
            albumArt: "",
            url: "https://open.spotify.com",
          })
        );
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), mockNowPlaying()],
});
