import React, {useState, useEffect} from "react"
import {Form, Button} from "semantic-ui-react"
import {useForm} from "react-hook-form"
import axios from "axios"

export default function updateList(props) {
  const [listId, setListId] = useState(" ")

  useEffect(() => {
    setListId(props.id)
  })

  const {register, handleSubmit} = useForm()

  const renameList = async data => {
    console.log("data", data)
    await axios.put(`http://localhost:8080/api/list/${props.userId}`, {
      listId: Number(props.listId),
      title: data.title,
      description: data.description
    })

    props.updateList()
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(renameList)}>
        <Form.Field align="center">
          <label>New Title</label>
          <input name="title" placeholder="New Name" ref={register} />
        </Form.Field>
        <br />
        <Form.Field>
          <label>New description</label>
          <input
            name="description"
            placeholder="Movies not as good as parasite"
            ref={register}
          />
        </Form.Field>
        <br />
        <Button color="red" type="submit">
          Update List
        </Button>
      </Form>
    </div>
  )
}
