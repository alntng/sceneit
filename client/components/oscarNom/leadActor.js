import React, {useState} from 'react'

export default function leadActor() {
  const [chosen, setChosen] = useState({})

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
        'https://cdn.vox-cdn.com/thumbor/Bnbz8ziSXa0fdhi2m5hS0bMCzdg=/0x0:3000x2000/1375x1375/filters:focal(1213x216:1693x696):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64838034/Film_Review___Once_Upon_a_Time_in_Hollywood_09982.0.jpg'
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
    <div>
      <h1>Lead Actor</h1>
      <div className="nominationList">
        {leadActors.map(actor => {
          return (
            <div
              id="movieChoice"
              key={actor.name}
              className={chosen.name === actor.name ? 'active' : null}
              onClick={() => setChosen(actor)}
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
