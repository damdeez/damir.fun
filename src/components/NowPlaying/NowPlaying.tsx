import "./nowplaying.scss";
import type { AlbumArtwork, Track } from "../../types/lastfm";

const LASTFM_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=damdeez&api_key=${
  import.meta.env.PUBLIC_LASTFM_KEY
}&limit=1&format=json`;

let track: Track | null = null;
try {
  const response = await fetch(LASTFM_ENDPOINT);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const json = await response.json();
  track = json?.recenttracks?.track?.[0] ?? null;
} catch (error) {
  console.error("Failed to load now playing track", error);
}

const NowPlaying = () => {
  const albumArtwork = track?.image;
  const albumCover =
    albumArtwork?.find((image: AlbumArtwork) => image.size === "medium")?.[
      "#text"
    ] ?? "";
  const artist = track?.artist?.["#text"] ?? "";
  const songName = track?.name ?? "";
  const nowPlaying =
    track?.["@attr"]?.nowplaying === "true" ||
    track?.["@attr"]?.nowplaying === true;

  return (
    <div className="now-playing">
      {track && (
        <>
          <span className="now-listening">
            {nowPlaying ? "🎧 #NowListening:" : "🎵 Last played:"}{" "}
          </span>
          {albumArtwork && (
            <span className="album-cover">
              <img alt="album-cover" src={albumCover} />
            </span>
          )}
          {artist && <span className="artist">{artist}</span>}
          {songName && <span className="song-name"> - {songName}</span>}
        </>
      )}
    </div>
  );
};

export default NowPlaying;
