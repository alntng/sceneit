import React, {useState} from 'react'

export default function supportingActor() {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    window.sessionStorage.setItem('Supporting Actor', movieObj.name)
  }

  const supportingActor = [
    {
      name: 'Tom Hanks',
      movie: 'A Beautiful Day in the Neighborhood',
      image:
        'https://cdn.vox-cdn.com/thumbor/-PTRE2ZX9QQPROEaUuKPWqc5Wf8=/0x0:1200x600/1200x800/filters:focal(440x126:632x318)/cdn.vox-cdn.com/uploads/chorus_image/image/65210066/rogers3.0.jpg'
    },
    {
      name: 'Anthony Hopkins',
      movie: 'The Two Popes',
      image:
        'https://www.gannett-cdn.com/presto/2019/11/27/USAT/60d9136b-7953-4143-b372-e207b2cabd27-VPC_TWO_POPES_TRAILER_DESK_THUMB.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp'
    },
    {
      name: 'Al Pacino',
      movie: 'The Irishman',
      image:
        'https://media.wired.com/photos/5de806d9b4ac1c00080cd51e/master/pass/Culture_deagingTA_TI_KS_038.jpg'
    },
    {
      name: 'Joe Pesci',
      movie: 'The Irishman',
      image:
        'https://watchcharge.s3.amazonaws.com/uploads/2019/10/joe-pesci.jpg'
    },
    {
      name: 'Brad Pitt',
      movie: 'Once Upon a Time in Hollywood',
      image:
        'https://ewedit.files.wordpress.com/2019/06/once-upon-a-time-in-hollywood-qt9_r_00153.jpg?w=2700&h=1800'
    }
  ]

  return (
    <div id="supporting-actor">
      <h1>Supporting Actor</h1>
      <div className="nominationList">
        {supportingActor.map(actor => {
          return (
            <div
              id="movieChoice"
              key={actor.name}
              className={chosen.name === actor.name ? 'active' : null}
              onClick={() => addToSession(actor)}
            >
              <img id="leadActor" src={actor.image} />
              <div className="overlay">
                <h4 className="text">{actor.name}</h4>
                <br />
                <p>{actor.movie}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
