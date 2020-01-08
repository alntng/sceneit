import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {TMDBAPIKEY} from '../../secrets'

export default function addMovie() {
  const [foundMovies, setFoundMovies] = useState([])

  const onSubmit = async data => {
    const movieQuery = data.Title.split(' ').join('%20')
    const movieURL = `https://api.themoviedb.org/3/search/movie?api_key=${TMDBAPIKEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`

    const res = await axios.get(movieURL)

    const movieSearch = res.data.results
    setFoundMovies(movieSearch)
  }

  const {register, handleSubmit, watch, errors} = useForm()

  const year = new Date().getFullYear()
  const years = Array.from(new Array(80), (val, index) => year - index)

  console.log(foundMovies)
  return (
    <div>
      <h3>Add a movie</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input name="Title" ref={register} />
        <label>Release Year</label>
        <select name="Year" ref={register}>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <label>Summary</label>
        <input name="Summary" ref={register} />
        <input type="submit" />
      </form>
    </div>
  )
}
