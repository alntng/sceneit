import React, {useState} from 'react'

export default function makeupHair() {
  const [chosen, setChosen] = useState({})

  const movies = [
    {
      title: 'BombShell',
      img:
        'https://www.hollywoodinsider.com/wp-content/uploads/2019/12/Hollywood-Insider-Behind-The-Scenes-Making-of-Bombshell-Charlize-Theron-Nicole-Kidman-Margot-Robbie-John-Lithgow-Jay-Roach.jpg'
    },
    {
      title: 'Joker',
      img:
        'http://images6.fanpop.com/image/photos/43100000/Joker-2019-Behind-the-Scenes-Joaquin-Phoenix-joker-2019-43100461-1080-1080.jpg'
    },
    {
      title: 'Judy',
      img:
        'https://cdn1.thr.com/sites/default/files/imagecache/768x433/2019/11/judy_-_bts_-_behind_the_scenes_-_publicity_-_h_2019_.jpg'
    },
    {
      title: 'Maleficent: Mistress of Evil',
      img:
        'https://bossip.files.wordpress.com/2019/09/15682626887713.jpg?w=1400&h=2034'
    },
    {
      title: '1917',
      img:
        'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2020/01/8v66_d041_00011r-h_2020.jpg'
    }
  ]

  return (
    <div>
      <h1>Hair and Makeup</h1>
      <div className="nominationList">
        {movies.map(movie => {
          return (
            <div
              id="movieChoice"
              key={movie.title}
              className={chosen.title === movie.title ? 'active' : null}
              onClick={() => setChosen(movie)}
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
