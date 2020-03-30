import React, {useState, useEffect} from "react"
import {useParams, useHistory} from "react-router-dom"
import {Modal, Button} from "semantic-ui-react"
import axios from "axios"
import AddMovie from "./addMovie"
import SingleMovie from "./singleMovie"
import UpdateList from "./updateList"

export default function movie() {
  let userId = useParams().userId
  let listId = useParams().listId
  const history = useHistory()

  const [moviesOnList, setMovieList] = useState([])
  const [listName, setListName] = useState(" ")

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

  const addToList = async (data, listId) => {
    await axios.post("http://localhost:8080/api/movies/", data)

    await axios.put("http://localhost:8080/api/list/", {
      movieId: data.id,
      listId: Number(listId)
    })

    await fetchData()
  }

  const removeFromList = async id => {
    await axios.put(`http://localhost:8080/api/list/${userId}/${listId}`, {
      id
    })

    fetchData()
  }

  // const renameList = async data => {
  //   await axios.put(`http://localhost:8080/api/list/${props.userId}`, {
  //     listId: Number(props.listId),
  //     title: data.title,
  //     description: data.description
  //   })

  //   props.fetchData()
  // }

  const deleteList = async (userId, listId) => {
    await axios.delete(`http://localhost:8080/api/list/${userId}/${listId}`, {})

    history.push(`/list/${userId}`)
    fetchData()
  }

  return (
    <div>
      <h1 className="movieName">{listName}</h1>

      <div className="movieList">
        {moviesOnList.map(movie => (
          <div key={movie.id}>
            <SingleMovie
              key={movie.id}
              id={movie.movieId}
              postGresID={movie.id}
              delete={removeFromList}
            />
          </div>
        ))}
      </div>

      <span className="buttonRow">
        <Modal trigger={<Button>Add Movie</Button>} basic size="small">
          <AddMovie listid={listId} addToList={addToList} />
        </Modal>
        <Modal trigger={<Button>Edit List </Button>} basic size="small">
          <UpdateList listId={listId} userId={userId} updateList={fetchData} />
        </Modal>
        <Button
          onClick={() => {
            deleteList(userId, listId)
          }}
        >
          Delete this List
        </Button>
      </span>
    </div>
  )
}
