import React, {useState} from 'react'

export default function leadActor(props) {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    props.setPredictions({...props.predictions, 'Lead Actor': movieObj.name})
  }

  const leadActors = [
    {
      name: 'Antonio Banderas',
      movie: 'Pain and Glory',
      image:
        'https://www.indiewire.com/wp-content/uploads/2019/05/painandglory.jpg'
    },
    {
      name: 'Leonardo Di Caprio',
      movie: 'Once Upon a Time in HollyWood',
      image:
        'https://www.usajacket.com/wp-content/uploads/2018/07/Leonardo-DiCaprio-Blazer-Jacket.jpg'
    },
    {
      name: 'Adam Driver',
      movie: 'Marriage Story',
      image:
        'https://www.indiewire.com/wp-content/uploads/2019/11/MCDMAST_ZX009.jpg?resize=1536,864'
    },
    {
      name: 'Joaquin Phoenix',
      movie: 'Joker',
      image:
        'https://i.insider.com/5d9b9acc49e03f38f4481121?width=2500&format=jpeg&auto=webp'
    },
    {
      name: 'Jonathan Pryce',
      movie: 'The Two Popes',
      image: 'https://pbs.twimg.com/media/EDYBjJyXUAE_Joj?format=jpg&name=large'
    }
  ]

  return (
    <div id="lead-actor">
      <h1>Lead Actor</h1>
      <div className="nominationList">
        {leadActors.map(actor => {
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
