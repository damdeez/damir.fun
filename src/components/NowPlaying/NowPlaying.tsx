import "./nowplaying.scss";
import type { AlbumArtwork, Track } from "../../types/lastfm";

interface NowPlayingProps {
  track: Track | null;
}

const NowPlaying = ({ track }: NowPlayingProps) => {
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
