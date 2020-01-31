import React, {useState} from 'react'

export default function internationalFeature() {
  const [chosen, setChosen] = useState({})
  const internationalFeatures = [
    {
      title: 'Corpus Christi',
      poster:
        'https://image.tmdb.org/t/p/original//sdjdKaMWymcx19ekrUvhM9V5xZU.jpg'
    },
    {
      title: 'HoneyLand',
      poster:
        'https://image.tmdb.org/t/p/original//bvO1rKTjohHjdYAZDkG8Ygz1KdC.jpg'
    },
    {
      title: 'Les Misérables',
      poster:
        'https://image.tmdb.org/t/p/original//sOy9Sa9Noro1VjZjdTTh7U3XmcU.jpg'
    },
    {
      title: 'Pain and Glory',
      poster:
        'https://image.tmdb.org/t/p/original//cMlueArJXXwZbeLpb4NhC3pxmBk.jpg'
    },
    {
      title: 'Parasite',
      poster: 'https://theposterdb.com/api/assets/37035/view'
    }
  ]

  return (
    <div>
      <h1>Best International Feature</h1>
      <div className="nominationList">
        {internationalFeatures.map(movie => {
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
