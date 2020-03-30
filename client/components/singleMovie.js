import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import {Grid, Image, Card, Icon, Button} from "semantic-ui-react"
import {TMDBAPIKEY, tmdbConfig} from "../../secrets"

export default function singleMovie(props) {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${
        props.id
      }?api_key=${TMDBAPIKEY}&language=en-US
    `)
      setMovie(res.data)
    }
    fetchData()
  })

  return (
    <div key={movie.id} className="singleMovie">
      <Card>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{movie.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              {movie.release_date ? movie.release_date.slice(0, 4) : "nothing"}
            </span>
          </Card.Meta>
          {/* <Card.Description>{movie.overview}</Card.Description> */}
        </Card.Content>
        <Card.Content extra>
          <Button
            icon
            onClick={() => {
              props.delete(props.postGresID)
            }}
          >
            <Icon />
            Remove movie from list
          </Button>
        </Card.Content>
      </Card>
    </div>
  )
}
