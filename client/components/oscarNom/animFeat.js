import React, {useState} from 'react'

export default function animFeat(props) {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    props.setPredictions({
      ...props.predictions,
      'Animated Feature': movieObj.title
    })
  }

  const animatedFeatures = [
    {
      title: 'How to Train Your Dragon: The Hidden World',
      poster: 'https://theposterdb.com/api/assets/34359/view'
    },
    {
      title: 'I Lost My Body',
      poster:
        'https://image.tmdb.org/t/p/original//z5dXCywyo8zEPNDkeQY7nbvkrz8.jpg'
    },
    {
      title: 'Klaus',
      poster: 'https://theposterdb.com/api/assets/41487/view'
    },
    {
      title: 'Missing Link',
      poster: 'https://theposterdb.com/api/assets/28803/view'
    },
    {
      title: 'Toy Story 4',
      poster: 'https://theposterdb.com/api/assets/31766/view'
    }
  ]

  return (
    <div id="animated-feature">
      <h1>Best Animated Feature</h1>
      <div className="nominationList">
        {animatedFeatures.map(movie => {
          return (
            <div
              id="movieChoice"
              key={movie.title}
              className={chosen.title === movie.title ? 'active' : null}
              onClick={() => addToSession(movie)}
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
