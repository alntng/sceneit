import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {TMDBAPIKEY} from '../../secrets'

export default function addMovie(props) {
  const [foundMovies, setFoundMovies] = useState([])

  const queryMovie = async data => {
    const movieQuery = data.Title.split(' ').join('%20')
    const movieURL = `https://api.themoviedb.org/3/search/movie?api_key=${TMDBAPIKEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`

    const res = await axios.get(movieURL)

    const movieSearch = res.data.results

    setFoundMovies(movieSearch)
  }

  const addToList = async (data, listId) => {
    // console.log(data)
    const newMovie = await axios.post('http://localhost:8080/api/movies/', data)

    axios.put('http://localhost:8080/api/list/', {
      movieId: data.id,
      listId: Number(listId)
    })
    return newMovie
  }

  const {register, handleSubmit} = useForm()

  return (
    <div>
      <h3>Add a movie</h3>
      <form onSubmit={handleSubmit(queryMovie)}>
        <label>Search</label>
        <input name="Title" ref={register} />
        <input type="submit" />
      </form>
      {foundMovies.map(movie => (
        <div key={movie.itle}>
          <h2>{movie.original_title}</h2>
          <h3>{movie.release_date}</h3>
          <button
            type="submit"
            onClick={() => {
              addToList(movie, props.listid)
            }}
          >
            Add Movie
          </button>
        </div>
      ))}
    </div>
  )
}
