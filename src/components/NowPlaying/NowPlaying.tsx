import { useEffect, useState } from "react";
import "./nowplaying.scss";
import type { AlbumArtwork, Track } from "../../types/lastfm";

const LASTFM_ENDPOINT = import.meta.env.PUBLIC_LASTFM_KEY
  ? `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=damdeez&api_key=${import.meta.env.PUBLIC_LASTFM_KEY}&limit=1&format=json`
  : null;
const FETCH_TIMEOUT_MS = 5000;

const NowPlaying = () => {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    if (!LASTFM_ENDPOINT) {
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const loadTrack = async () => {
      try {
        const response = await fetch(LASTFM_ENDPOINT, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const json: {
          recenttracks?: { track?: Track[] };
        } = await response.json();
        const latestTrack = json?.recenttracks?.track?.[0] ?? null;
        setTrack(latestTrack);
      } catch (error: unknown) {
        if (!(error instanceof DOMException) || error.name !== "AbortError") {
          console.error("Failed to load now playing track", error);
        }
      } finally {
        window.clearTimeout(timeoutId);
      }
    };

    loadTrack();

    return () => {
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, []);

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
  const albumAltText = songName && artist
    ? `Album artwork for ${songName} by ${artist}`
    : "Album artwork";

  if (!track) {
    return null;
  }

  return (
    <div className="now-playing" role="status" aria-live="polite">
      <>
        <span className="now-listening">
          {nowPlaying ? "🎧 #NowListening:" : "🎵 Last played:"}{" "}
        </span>
        {albumArtwork && albumCover && (
          <span className="album-cover">
            <img alt={albumAltText} src={albumCover} />
          </span>
        )}
        {artist && <span className="artist">{artist}</span>}
        {songName && <span className="song-name"> - {songName}</span>}
      </>
    </div>
  );
};

export default NowPlaying;
