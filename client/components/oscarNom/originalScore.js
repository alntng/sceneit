import React, {useState} from 'react'

export default function bestPicture() {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    window.sessionStorage.setItem('Original Score', movieObj.title)
  }

  const moviePosters = [
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
      title: '1917',
      posterUrl: 'https://theposterdb.com/api/assets/43053/view'
    },
    {
      title: 'Star Wars: The Rise of Skywalker',
      posterUrl: 'https://theposterdb.com/api/assets/41812/view'
    }
  ]

  return (
    <div id="original-score">
      <h1>Original Score</h1>
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
