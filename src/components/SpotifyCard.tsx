import { useNowPlaying } from "../hooks/useNowPlaying";

export default function SpotifyCard() {
  const state = useNowPlaying();

  if (state.status === "loading") {
    return (
      <div className="spotify-card">
        <div className="spotify-art" aria-hidden />
        <div>
          <div className="spotify-status">
            <span className="dot" /> connecting…
          </div>
        </div>
      </div>
    );
  }

  if (state.status === "unavailable") {
    return (
      <div className="spotify-card">
        <div className="spotify-art" aria-hidden />
        <div>
          <div className="spotify-status">
            <span className="dot" /> offline
          </div>
          <p className="spotify-artist">Nothing playing right now.</p>
        </div>
      </div>
    );
  }

  const { data } = state;
  return (
    <a
      className="spotify-card"
      href={data.url}
      target="_blank"
      rel="noreferrer"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      {data.albumArt ? (
        <img
          className="spotify-art"
          src={data.albumArt}
          alt={`${data.album} album art`}
        />
      ) : (
        <div className="spotify-art" aria-hidden />
      )}
      <div>
        <div className={`spotify-status${data.isPlaying ? " live" : ""}`}>
          <span className="dot" />
          {data.isPlaying ? "now playing" : "last played"}
        </div>
        <p className="spotify-track">{data.title}</p>
        <p className="spotify-artist">{data.artist}</p>
      </div>
    </a>
  );
}
