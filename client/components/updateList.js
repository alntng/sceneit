import React, {useState, useEffect} from 'react'
import {Form} from 'semantic-ui-react'
import {useForm, Button} from 'react-hook-form'

export default function updateList(props) {
  const [listId, setListId] = useState([])

  useEffect(() => {
    setListId(props.id)
  })

  const {register, handleSubmit} = useForm()

  return (
    <div>
      <Form onSubmit={handleSubmit()}>
        <Form.Field align="center">
          <label>New Title</label>
          <input name="title" placeholder="Who Cares" ref={register} />
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
