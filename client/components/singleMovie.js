import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
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
  // console.log(movie)
  return (
    <div key={movie.id}>
      <h3>{movie.title}</h3>
      <h6>{movie.overview}</h6>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
    </div>
  )
}
