import './nowplaying.scss';

interface AlbumArtwork {
  size: string;
  '#text': string;
}

interface Artist {
  mbid: string;
  '#text': string;
}

const data = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=damdeez&api_key=${import.meta.env.PUBLIC_LASTFM_KEY}&limit=1&format=json`).then((response) => response.json());

const spotifyDataRecent = data.recenttracks.track[0];
const nowPlaying: boolean = spotifyDataRecent?.['@attr']?.nowplaying ?? false;
const albumArtwork: AlbumArtwork[] = spotifyDataRecent.image;
const artist: Artist = spotifyDataRecent.artist;
const songName: string = spotifyDataRecent.name;

const NowPlaying = () => {
  return (
    <div className="now-playing">
      {spotifyDataRecent && (
        <>
          <span className="now-listening">{nowPlaying ? '🎧 #NowListening:' : '🎵 Last played:'} </span>
          {albumArtwork
            && (
              <span className="album-cover">
                <img alt="album-cover" src={albumArtwork.find((image: AlbumArtwork) => image.size === 'medium')?.['#text']} />
              </span>
            )}
          {artist && <span className="artist">{artist['#text']}</span>}
          {songName && <span className="song-name"> - {songName}</span>}
        </>
      )}
    </div>
  );
};

export default NowPlaying;
