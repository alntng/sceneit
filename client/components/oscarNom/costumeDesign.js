import React, {useState} from 'react'

export default function makeupHair() {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    window.sessionStorage.setItem('Costume Design', movieObj.title)
  }

  const movies = [
    {
      title: 'The Irishman',
      img:
        'https://d3dh6of9cnaq4t.cloudfront.net/Pictures/2000x1125/8/6/6/10866_theirishmanrobertdeniroandalpacinodeaged_204990.jpg'
    },
    {
      title: 'Jojo Rabbit',
      img: 'https://pittnews.com/wp-content/uploads/2019/11/C_Jojo.jpg'
    },
    {
      title: 'Joker',
      img:
        'https://media.architecturaldigest.com/photos/5d938a78d9d1f50008173195/16:9/w_2560%2Cc_limit/JOK-12470.jpg'
    },
    {
      title: 'Little Women',
      img:
        'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2F0f3a1550-d628-11e7-8c9a-d9c0a5c8d5c9?fit=scale-down&source=next&width=700'
    },
    {
      title: 'Once Upon a Time in Hollywood',
      img:
        'https://cdn.vox-cdn.com/thumbor/IDMMV6Kub4wE3hN_H6POOG1FZvY=/0x0:3000x2000/1820x1213/filters:focal(1230x499:1710x979):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65024130/onceuponatime3.0.jpeg'
    }
  ]

  return (
    <div id="costume-design">
      <h1>Costume Design</h1>
      <div className="nominationList">
        {movies.map(movie => {
          return (
            <div
              id="movieChoice"
              key={movie.title}
              className={chosen.title === movie.title ? 'active' : null}
              onClick={() => addToSession(movie)}
            >
              <img id="hairMakeup" src={movie.img} />
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
