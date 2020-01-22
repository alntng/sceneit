import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import AddMovie from './addMovie'
import SingleMovie from './singleMovie'
import {Modal, Button} from 'semantic-ui-react'

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
          <SingleMovie
            key={movie.id}
            id={movie.movieId}
            postGresID={movie.id}
            delete={removeFromList}
          />
          {/* <button
            type="submit"
            onClick={() => {
              removeFromList(movie.id)
            }}
          >
            X
          </button> */}
        </div>
      ))}
      <Modal trigger={<Button>Add Movie</Button>} basic size="small">
        <AddMovie listid={listId} updateList={fetchData} />
      </Modal>
      <br />
      <Button
        onClick={() => {
          deleteList(userId, listId)
        }}
      >
        Delete this List
      </Button>
    </div>
  )
}
