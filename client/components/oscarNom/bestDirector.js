import React, {useState} from 'react'

export default function bestDirector() {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    window.sessionStorage.setItem('Best Director', movieObj.name)
  }

  const directors = [
    {
      name: 'Martin Scorsese',
      movie: 'The Irishman',
      image:
        'https://cdn1.thr.com/sites/default/files/imagecache/768x433/2019/11/the_irishman_-bts_-__publicity_-_h_2019_.jpg'
    },
    {
      name: 'Todd Phillips',
      movie: 'The Joker',
      image:
        'https://boundingintocomics.com/files/2019/12/2019.12.23-12.15-boundingintocomics-5e00afc743c30.jpg'
    },
    {
      name: 'Sam Mendes',
      movie: '1917',
      image:
        'https://static01.nyt.com/images/2019/12/26/arts/23mendes-1917/merlin_162917811_2490eea4-f03b-4fbb-b1b2-13d4e851d8e7-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    },
    {
      name: 'Quentin Tarantino',
      movie: 'Once Upon a Time in Hollywood',
      image:
        'https://theplaylist.net/wp-content/uploads/2016/09/quentin-tarantino-1200x520.jpg'
    },
    {
      name: 'Bong Joon Ho',
      movie: 'Parasite',
      image:
        'https://media.vanityfair.com/photos/5e2b3afb32d76a000842a2c7/master/w_2560%2Cc_limit/VF1320-Oscars-Special-cover-opener-no-crop.png'
    }
  ]
  return (
    <div id="best-director">
      <h1>Best Director</h1>
      <div className="nominationList">
        {directors.map(actor => {
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
