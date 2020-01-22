import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Grid, Image, Card, Icon, Button} from 'semantic-ui-react'
import {TMDBAPIKEY, tmdbConfig} from '../../secrets'

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
  // console.log(props, 'PROPS')
  return (
    <div key={movie.id}>
      <Card>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{movie.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              {movie.release_date ? movie.release_date.slice(0, 4) : 'nothing'}
            </span>
          </Card.Meta>
          <Card.Description>{movie.overview}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            icon
            onClick={() => {
              props.delete(props.key)
              console.log('should delete')
            }}
          >
            <Icon name="user" />
            Remove movie from list
          </Button>
        </Card.Content>
      </Card>
      {/* <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            />
          </Grid.Column>
          <Grid.Column width={13}>
            <h3>{movie.title}</h3>
            <h6>{movie.overview}</h6>
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </div>
  )
}
