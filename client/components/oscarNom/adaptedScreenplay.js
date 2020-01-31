import React, {useState} from 'react'

export default function adaptedScreenplay() {
  const [chosen, setChosen] = useState({})

  const moviePosters = [
    {
      title: 'The IrishMan',
      posterUrl: 'https://theposterdb.com/api/assets/18917/view'
    },
    {
      title: 'Jojo Rabbit',
      posterUrl: 'https://theposterdb.com/api/assets/41444/view'
    },
    {
      title: 'Joker',
      posterUrl: 'https://theposterdb.com/api/assets/44542/view'
    },
    {
      title: 'Little Women',
      posterUrl: 'https://theposterdb.com/api/assets/41709/view'
    },
    {
      title: 'The Two Popes',
      posterUrl: 'https://theposterdb.com/api/assets/41340/view'
    }
  ]

  return (
    <div>
      <h1>Adapted Screenplay</h1>
      <div className="nominationList">
        {moviePosters.map(movie => {
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
