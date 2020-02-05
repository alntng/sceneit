import React, {useState} from 'react'

export default function bestPicture(props) {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    props.setPredictions({
      ...props.predictions,
      'Original Screenplay': movieObj.title
    })
  }

  const moviePosters = [
    {
      title: 'Knives Out',
      posterUrl: 'https://theposterdb.com/api/assets/44145/view'
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
    <div id="original-screenplay">
      <h1>Original Screenplay</h1>
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
