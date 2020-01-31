import React, {useState} from 'react'

export default function soundEditing() {
  const [chosen, setChosen] = useState({})
  const moviePosters = [
    {
      title: 'Ford V Ferrari',
      posterUrl: 'https://theposterdb.com/api/assets/29861/view'
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
      title: 'Star Wars: The Rise of Skywalker',
      posterUrl: 'https://theposterdb.com/api/assets/41812/view'
    }
  ]

  return (
    <div>
      <h1>Sound Editing</h1>
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
