import React, {useState} from 'react'

export default function docShortSubject() {
  const [chosen, setChosen] = useState({})

  const shortSubjects = [
    {
      title: 'In the Adsence',
      poster: 'https://theposterdb.com/api/assets/41363/view'
    },
    {
      title: 'Learning to Skateboard in a Warzone',
      poster: 'https://theposterdb.com/api/assets/41344/view'
    },
    {
      title: 'Life Overtakes Me',
      poster: 'https://theposterdb.com/api/assets/41361/view'
    },
    {
      title: 'St. Louis Superman',
      poster:
        'https://lh5.googleusercontent.com/proxy/UPlgl6y-P74wZx0ZojTw4ZDYBzF2h3U5Z77C8Evff8QDZ1Ja1pDgfIHvvBxxbk9XMLvg1g-uYkQFxcRC6Kk'
    },
    {
      title: 'Walk Run Cha-Cha',
      poster: 'https://theposterdb.com/api/assets/41360/view'
    }
  ]

  return (
    <div>
      <h1>Documentary Short Subject</h1>
      <div className="nominationList">
        {shortSubjects.map(movie => {
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
