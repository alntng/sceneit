import React, {useState} from 'react'

export default function originalSong() {
  const [chosen, setChosen] = useState({})

  const originalSongs = [
    {
      title: 'I Can’t Let You Throw Yourself Away',
      movie: 'Toy Story 4',
      posterUrl: 'https://theposterdb.com/api/assets/31766/view',
      spotify: 'spotify:track:7tSODhfDkv0JEhkSMYSIBS'
    },
    {
      title: 'I’m Gonna Love Me Again',
      movie: 'Rocketman',
      posterUrl: 'https://theposterdb.com/api/assets/13573/view',
      spotify: 'spotify:track:1q8lLOgfciaGLwXCvOpH6w'
    },
    {
      title: 'I’m Standing With You',
      movie: 'Breakthrough',
      posterUrl: 'https://theposterdb.com/api/assets/13143/view',
      spotify: 'spotify:track:7AlVjh1sSW5PLtqhoNgHPP'
    },
    {
      title: 'Into the Unknown',
      movie: 'Frozen 2',
      posterUrl: 'https://theposterdb.com/api/assets/41382/view',
      spotify: 'spotify:track:3Z0oQ8r78OUaHvGPiDBR3W'
    },
    {
      title: 'Stand Up',
      movie: 'Harriet',
      posterUrl: 'https://theposterdb.com/api/assets/42952/view',
      spotify: 'spotify:track:0Ppjgu01pLU3iBVaXaPt3M'
    }
  ]

  return (
    <div id="original-song">
      <h1>Original Song</h1>
      <div className="nominationList">
        {originalSongs.map(movie => {
          return (
            <div
              id="movieChoice"
              key={movie.title}
              className={chosen.title === movie.title ? 'active' : null}
              onClick={() => setChosen(movie)}
            >
              <img id="nominee" src={movie.posterUrl} />
              <div className="overlay">
                <div className="text">{movie.title}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
