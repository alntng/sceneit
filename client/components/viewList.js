import React, {useState, useEffect} from 'react'
import {Link, Route} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'

export default function viewList(props) {
  const [list, setList] = useState([])
  const {register, handleSubmit, watch, errors} = useForm()

  const userId = props.id

  const fetchData = async () => {
    const result = await axios(`http://localhost:8080/api/list/${userId}`)
    setList(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addList = async data => {
    const newList = await axios.post(
      `http://localhost:8080/api/list/${userId}`,
      data
    )

    fetchData()
    return newList
  }
  // console.log(props, '***')
  return (
    <div>
      <h1>Movie Lists</h1>
      {list.map(movieList => (
        <div key={movieList.id}>
          <Link to={`/list/${userId}/${movieList.id}`}>{movieList.title}</Link>
        </div>
      ))}
      <h3>Create New List</h3>
      <form onSubmit={handleSubmit(addList)}>
        <input name="title" defaultValue="Who Cares" ref={register} />
        <input
          name="description"
          defaultValue="Movies not as good as parasite"
          ref={register}
        />
        <button type="submit">create new list</button>
      </form>
    </div>
  )
}
