import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import AddMovie from './addMovie'
import SingleMovie from './singleMovie'

export default function movie() {
  let userId = useParams().userId
  let listId = useParams().listId
  const history = useHistory()

  const [moviesOnList, setMovieList] = useState([])
  const [listName, setListName] = useState(' ')

  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/list/${userId}/${listId}`
    )

    setMovieList(result.data.movies)
    setListName(result.data.title)
  }

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await axios.get(
    //     `http://localhost:8080/api/list/${userId}/${listId}`
    //   )

    //   setMovieList(result.data.movies)
    //   setListName(result.data.title)
    // }
    fetchData()
  }, [])

  const removeFromList = async id => {
    await axios.put(`http://localhost:8080/api/list/${userId}/${listId}`, {
      id
    })
    fetchData()
  }

  const deleteList = async (userId, listId) => {
    await axios.delete(`http://localhost:8080/api/list/${userId}/${listId}`, {})

    history.push(`/list/${userId}`)
  }

  return (
    <div>
      <h1>{listName}</h1>
      {moviesOnList.map(movie => (
        <div key={movie.id}>
          <SingleMovie key={movie.id} id={movie.movieId} />
          <button
            type="submit"
            onClick={() => {
              removeFromList(movie.id)
            }}
          >
            X
          </button>
        </div>
      ))}
      <AddMovie listid={listId} />
      <button
        type="submit"
        onClick={() => {
          deleteList(userId, listId)
        }}
      >
        Delete this List
      </button>
    </div>
  )
}
