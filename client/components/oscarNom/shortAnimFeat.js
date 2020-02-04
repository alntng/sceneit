import React, {useState} from 'react'

export default function shortAnimFeat() {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    window.sessionStorage.setItem('Short Animation Feature', movieObj.name)
  }

  const shortAnims = [
    {
      name: 'Dcera',
      poster:
        'https://m.media-amazon.com/images/M/MV5BZTA3YzE5MWItNjE1ZS00MDQwLTk2ZjMtYzUzOGI1MGJjODA5XkEyXkFqcGdeQXVyNjgzMjQ0MTA@._V1_.jpg'
    },
    {
      name: 'Hair Love',
      poster:
        'https://image.tmdb.org/t/p/original//w2wYB2Lt2cpADybLxffHibGxqh4.jpg'
    },
    {
      name: 'Kitbull',
      poster:
        'https://image.tmdb.org/t/p/original//8qblK8VqWOxrUWeJYkBszqYmW12.jpg'
    },
    {
      name: 'Memorable',
      poster: 'https://theposterdb.com/api/assets/41362/view'
    },
    {
      name: 'Sister',
      poster:
        'https://m.media-amazon.com/images/M/MV5BYThkZjRlOTAtZWNjYi00ZWNlLWE1YjUtMzg3OTVkNzIzODRhXkEyXkFqcGdeQXVyODU2NTIyMDY@._V1_SY1000_SX750_AL_.jpg'
    }
  ]

  return (
    <div id="short-animted-feature">
      <h1>Short Animation Feature</h1>
      <div className="nominationList">
        {shortAnims.map(movie => {
          return (
            <div
              id="movieChoice"
              key={movie.name}
              className={chosen.name === movie.name ? 'active' : null}
              onClick={() => addToSession(movie)}
            >
              <img id="nominee" src={movie.poster} />
              <div className="overlay">
                <div className="text">{movie.name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
