import React, {useState} from 'react'

export default function filmEditing() {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    window.sessionStorage.setItem('Film Editing', movieObj.title)
  }

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
      title: 'Parasite',
      posterUrl: 'https://theposterdb.com/api/assets/37035/view'
    }
  ]

  return (
    <div id="film-editing">
      <h1>Film Editing</h1>
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
