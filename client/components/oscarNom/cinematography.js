import React, {useState} from 'react'

export default function cinematography() {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    window.sessionStorage.setItem('Cinematography', movieObj.title)
  }

  const moviePosters = [
    {
      title: 'The IrishMan',
      posterUrl: 'https://theposterdb.com/api/assets/18917/view'
    },
    {
      title: 'Joker',
      posterUrl: 'https://theposterdb.com/api/assets/44542/view'
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
      title: 'The Lighthouse',
      posterUrl: 'https://theposterdb.com/api/assets/33953/view'
    }
  ]

  return (
    <div id="cinematography">
      <h1>Cinematography</h1>
      <div className="nominationList">
        {moviePosters.map(movie => {
          return (
            <div
              id="movieChoice"
              key={movie.title}
              className={chosen.title === movie.title ? 'active' : null}
              onClick={() => addToSession(movie)}
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
