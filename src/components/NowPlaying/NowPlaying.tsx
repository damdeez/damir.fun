import './nowplaying.scss';

interface Image {
  size: string;
}

const data = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=damdeez&api_key=${import.meta.env.LASTFM_KEY}&limit=1&format=json`).then((response) =>
    response.json()
  );

const spotifyDataRecent = data.recenttracks.track[0];
console.info('spotifyDataRecent', spotifyDataRecent);

const NowPlaying = () => {
  return (
    <div className="now-playing">
      {spotifyDataRecent && (
        <>
          <span className="now-listening">#NowListening: </span>
          {spotifyDataRecent.image
            && (
              <span className="album-cover">
                <img alt="album-cover" src={spotifyDataRecent.image.find((image: Image) => image.size === 'medium')['#text']} />
              </span>
            )}
          {spotifyDataRecent.artist
            && <span className="artist">{spotifyDataRecent.artist['#text']}</span>}
          {spotifyDataRecent.name && <span className="song-name"> - {spotifyDataRecent.name}</span>}
        </>
      )}
    </div>
  );
};

export default NowPlaying;
