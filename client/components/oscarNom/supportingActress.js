import React, {useState} from 'react'

export default function supportingActress(props) {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    props.setPredictions({
      ...props.predictions,
      'Supporting Actress': movieObj.name
    })
  }

  const supportingActress = [
    {
      name: 'Kathy Bates',
      movie: 'Richard Jewell',
      image:
        'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/kathy-bates-e1560526629853-700x350.jpg'
    },
    {
      name: 'Laura Dern',
      movie: 'Marriage Story',
      image:
        'https://productplacementblog.com/wp-content/uploads/2019/12/Apple-iMac-Computer-Used-by-Laura-Dern-in-Marriage-Story-1.jpg'
    },
    {
      name: 'Scarlett Johansson',
      movie: 'Jojo Rabbit',
      image:
        'https://www.goldderby.com/wp-content/uploads/2019/12/scarlett-johansson-jojo-rabbit.jpg?w=620&h=360&crop=1'
    },
    {
      name: 'Florence Pugh',
      movie: 'Little Women',
      image:
        'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/little-women-8-700x355.jpg'
    },
    {
      name: 'Margot Robbie',
      movie: 'Bombshell',
      image: 'https://www.advocate.com/sites/advocate.com/files/robbie.jpg'
    }
  ]

  return (
    <div id="supporting-actress">
      <h1>Supporting Actress</h1>
      <div className="nominationList">
        {supportingActress.map(actor => {
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
