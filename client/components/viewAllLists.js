import React, {useState, useEffect} from 'react'
import {Link, Route} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {Header, Button, Form, Modal, Card} from 'semantic-ui-react'
// import movie from './moviesOnList'

export default function viewAllLists(props) {
  const [list, setList] = useState([])
  const {register, handleSubmit} = useForm()

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
      <Header size="huge">Movie Lists</Header>
      {list.map(movieList => (
        <div key={movieList.id}>
          <Card
            // <Header size="medium">
            // <Link to={`/list/${userId}/${movieList.id}`}>
            href={`/list/${userId}/${movieList.id}`}
            header={movieList.title}
            description={movieList.description}
            // </Link>
            // </Header>
          />
        </div>
      ))}
      <Modal trigger={<Button>Create a New List</Button>}>
        <Form onSubmit={handleSubmit(addList)}>
          <Form.Field align="center">
            <label>Name of List</label>
            <input name="title" placeholder="ie: Watchlist" ref={register} />
          </Form.Field>
          <br />
          <Form.Field>
            <label>description</label>
            <input
              name="description"
              placeholder="Movies not as good as parasite"
              ref={register}
            />
          </Form.Field>
          <br />
          <Button color="red" type="submit">
            Create New List
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
