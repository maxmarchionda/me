# me — personal site

React + Vite + TypeScript + Radix Primitives. Deployed on Vercel.

## Structure

- `src/styles/tokens.css` — **design system seam**. All visual values live here as CSS variables; components only reference `var(--*)`. Swap this file when the real design system lands.
- `src/data/resume.ts` / `src/data/hobbies.ts` — all content. Edit data, not components.
- `api/now-playing.ts` — Vercel serverless function for live Spotify.
- `public/Max_Marchionda_Resume.pdf` — downloadable résumé.

## Develop

```sh
npm install
npm run dev        # mocks /api/now-playing (see vite.config.ts)
vercel dev         # runs the real Spotify function locally
npm run build      # typecheck + production build
```

## Spotify setup (one-time)

1. Create an app at https://developer.spotify.com/dashboard → note Client ID/Secret. Add redirect URI `http://127.0.0.1:3000/callback` (Spotify no longer allows `localhost`).
2. Run the helper and follow its prompts:
   ```sh
   SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node scripts/get-refresh-token.mjs
   ```
3. Set `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` in Vercel → Project → Settings → Environment Variables. The refresh token doesn't expire unless revoked.

## Adding photos

Drop images in `public/photos/` and register them in `src/data/hobbies.ts` (`photos` array). Grid + lightbox render automatically.
