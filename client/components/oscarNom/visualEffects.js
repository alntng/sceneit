import React, {useState} from 'react'

export default function visualEffects(props) {
  const [chosen, setChosen] = useState({})

  const addToSession = movieObj => {
    setChosen(movieObj)
    props.setPredictions({
      ...props.predictions,
      'Visual Effects': movieObj.title
    })
  }

  const moviePosters = [
    {
      title: 'Avengers Endgame',
      posterUrl:
        'https://img.buzzfeed.com/buzzfeed-static/static/2019-08/27/17/asset/88363bdb4c04/sub-buzz-8645-1566926130-1.jpg?downsize=800:*&output-format=auto&output-quality=auto'
    },
    {
      title: 'The IrishMan',
      posterUrl:
        'https://nypdecider.files.wordpress.com/2019/12/old-vs-new-bobby-.jpg?quality=90&strip=all&w=1284&h=856&crop=1'
    },
    {
      title: '1917',
      posterUrl:
        'https://cdn.traileraddict.com/content/extra-thumbs/363403723-4.jpg'
    },
    {
      title: 'The Lion King',
      posterUrl:
        'https://techcrunch.com/wp-content/uploads/2019/07/TLK-Caleb_OnTheWheels_StdyCamInBG_L1002485.jpg'
    },
    {
      title: 'Star Wars: The Rise of Skywalker',
      posterUrl:
        'https://media.vanityfair.com/photos/5ce426178d58ba426c1f921f/master/w_2560%2Cc_limit/star-wars-feature-vf-2019-summer-opener.jpg'
    }
  ]

  return (
    <div id="visual-effects">
      <h1>Visual Effects</h1>
      <div className="nominationList">
        {moviePosters.map(movie => {
          return (
            <div
              id="movieChoice"
              key={movie.title}
              className={chosen.title === movie.title ? 'active' : null}
              onClick={() => addToSession(movie)}
            >
              <img id="hairMakeup" src={movie.posterUrl} />
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
