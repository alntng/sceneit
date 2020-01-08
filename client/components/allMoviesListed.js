import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import AddMovie from './addMovie'

export default function movie() {
  let userId = useParams().userId
  let listId = useParams().listId

  const [moviesOnList, setMovieList] = useState([])
  const [listName, setListName] = useState(' ')

  useEffect(
    () => {
      async function fetchData() {
        const result = await axios.get(
          `http://localhost:8080/api/list/${userId}/${listId}`
        )

        setMovieList(result.data.movies)
        setListName(result.data.title)
      }

      fetchData()
    },
    [listName]
  )

  return (
    <div>
      <h1>{listName}</h1>
      {moviesOnList.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
      <AddMovie listid={listId} />
    </div>
  )
}
