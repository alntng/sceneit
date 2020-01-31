import React, {useState} from 'react'

export default function docFeature() {
  const [chosen, setChosen] = useState({})

  const documentaries = [
    {
      title: 'Anerican Factory',
      poster: 'https://theposterdb.com/api/assets/41338/view'
    },
    {
      title: 'The Cave',
      poster:
        'https://m.media-amazon.com/images/M/MV5BM2RiZjcxMmMtZGFhOS00MGU4LTk0YTItZGRmZTc0ZmM2Y2MzXkEyXkFqcGdeQXVyNjgzMjQ0MTA@._V1_.jpg'
    },
    {
      title: 'The Edge of Democracy',
      poster: 'https://theposterdb.com/api/assets/41339/view'
    },
    {
      title: 'For Sama',
      poster:
        'https://image.tmdb.org/t/p/original//mDna51F8QfrJFZOgPGQUz3VKqsB.jpg'
    },
    {
      title: 'HoneyLand',
      poster:
        'https://image.tmdb.org/t/p/original//bvO1rKTjohHjdYAZDkG8Ygz1KdC.jpg'
    }
  ]

  return (
    <div id="documentary-feature">
      <h1>Documentary Feature</h1>
      <div className="nominationList">
        {documentaries.map(movie => {
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
