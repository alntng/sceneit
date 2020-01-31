import React, {useState} from 'react'

export default function liveActionShort() {
  const [chosen, setChosen] = useState({})

  const liveActionShorts = [
    {
      title: 'Brotherhood',
      poster:
        'https://m.media-amazon.com/images/M/MV5BN2I0ZmRlMTItY2UyNy00YjYwLTk1ZjQtMWNjYWJhNmYwMGY0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
      title: 'Nefta Football Club',
      poster:
        'https://image.tmdb.org/t/p/original//q12uZ98BbJuxgVO53Rb4lvjfZZZ.jpg'
    },
    {
      title: "The Neighbor's Window",
      poster: 'https://theposterdb.com/api/assets/41497/view'
    },
    {
      title: 'Saria',
      poster:
        'https://image.tmdb.org/t/p/original//1uoiNz5TgYsp711sMHGCs8h43BN.jpg'
    },
    {
      title: 'A Sister',
      poster:
        'https://m.media-amazon.com/images/M/MV5BOWNiM2RjOWMtYWZiZi00MmRhLWJjYzEtYmQwN2Q2NzBhNGJjXkEyXkFqcGdeQXVyOTYyNDcxODE@._V1_.jpg'
    }
  ]

  return (
    <div id="live-action-short">
      <h1>Live Action Short</h1>
      <div className="nominationList">
        {liveActionShorts.map(movie => {
          return (
            <div
              id="movieChoice"
              key={movie.title}
              className={chosen.title === movie.title ? 'active' : null}
              onClick={() => setChosen(movie)}
            >
              <img id="nominee" src={movie.poster} />
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
