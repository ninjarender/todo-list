import { useState, createRef } from 'react' 

import './Form.scss'

export default (props) => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

  let titleRef = createRef()
  let descriptionRef = createRef()

  const submitHandler = (e) => {
    e.preventDefault()

    props.createTodo(title, description)

    setTitle('')
    titleRef.current.value = ''
    setDescription('')
    descriptionRef.current.value = ''
  }

  return(
    <form onSubmit={submitHandler}>
      <label>
        <span>Title</span>
        <input 
          type='text'
          ref={titleRef}
          defaultValue={title}
          onChange={() => setTitle(titleRef.current.value)}
          required
        />
      </label>
      <label>
        <span>Description</span>
        <textarea
          ref={descriptionRef}
          defaultValue={description}
          onChange={() => setDescription(descriptionRef.current.value)}></textarea>
      </label>
      <button type="submit">Add</button>
    </form>
  )
}
