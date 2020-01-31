import React, {useState} from 'react'

export default function leadActress() {
  const [chosen, setChosen] = useState({})

  const leadActress = [
    {
      name: 'Cynthia Erivo',
      movie: ' Harriet',
      image:
        'https://pmcvariety.files.wordpress.com/2019/08/harriet.jpg?w=1000&h=563&crop=1'
    },
    {
      name: 'Scarlett Johansson',
      movie: 'Marriage Story',
      image:
        'https://www.fanreviewstv.com/wp-content/uploads/2019/10/Marriage-Story-with-Scarlett-Johansson-Official-Trailer.jpg'
    },
    {
      name: 'Saoirse Ronan',
      movie: 'Little Women',
      image:
        'https://specials-images.forbesimg.com/imageserve/5e078b344e291700078413eb/960x0.jpg?cropX1=1&cropX2=688&cropY1=0&cropY2=387'
    },
    {
      name: 'Charlize Theron',
      movie: 'Bombshell',
      image:
        'https://pmcvariety.files.wordpress.com/2019/08/bombshell-charlize-theron-3.jpg'
    },
    {
      name: 'Renee Zellweger',
      movie: 'Judy',
      image:
        'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1687,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1569369088/190924-Zellweger-Judy-tease_kygkgn'
    }
  ]

  return (
    <div id="lead-actress">
      <h1>Lead Actress</h1>
      <div className="nominationList">
        {leadActress.map(actor => {
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
