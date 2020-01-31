import React, {useState} from 'react'

export default function bestPicture() {
  const [chosen, setChosen] = useState({})

  const moviePosters = [
    {
      title: 'Ford V Ferrari',
      posterUrl: 'https://theposterdb.com/api/assets/29861/view'
    },
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
      title: 'Marriage Story',
      posterUrl: 'https://theposterdb.com/api/assets/25481/view'
    },
    {
      title: 'Once Upon a Time in HollyWood',
      posterUrl: 'https://theposterdb.com/api/assets/43599/view'
    },
    {
      title: '1917',
      posterUrl: 'https://theposterdb.com/api/assets/43053/view'
    },
    {
      title: 'Parasite',
      posterUrl: 'https://theposterdb.com/api/assets/37035/view'
    }
  ]

  return (
    <div id="best-picture">
      <h1>Best Picture</h1>
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
