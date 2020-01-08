import React, {useState, useEffect} from 'react'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'

export default function viewList(props) {
  const [list, setList] = useState([])

  const userId = props.id

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`http://localhost:8080/api/list/${userId}`)

      setList(result.data)
    }

    fetchData()
  }, [])
  // console.log(props, '***')
  return (
    <div>
      <h1>Movie Lists</h1>
      {list.map(movieList => (
        <div key={movieList.id}>
          <Link to={`/list/${userId}/${movieList.id}`}>{movieList.title}</Link>
        </div>
      ))}
    </div>
  )
}
