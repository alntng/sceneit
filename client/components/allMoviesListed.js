import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import AddMovie from './addMovie'

export default function movie() {
  let userId = useParams().userId
  let listId = useParams().listId

  const [moviesOnList, setMovieList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:8080/api/list/${userId}/${listId}`
      )

      setMovieList(result.data)
    }

    fetchData()
  }, [])

  // console.log(moviesOnList)
  return (
    <div>
      <h1>Movies on this list</h1>
      {moviesOnList.map(movie => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
        </div>
      ))}
      <AddMovie />
    </div>
  )
}
