import { createRef } from 'react' 

import './Form.scss'

export default (props) => {
  let titleRef = createRef()
  let descriptionRef = createRef()

  const submitHandler = (e) => {
    e.preventDefault()

    props.createTodo(
      titleRef.current.value,
      descriptionRef.current.value
    )

    titleRef.current.value = ''
    descriptionRef.current.value = ''
  }

  return(
    <form onSubmit={submitHandler}>
      <label>
        <span>Title</span>
        <input type='text' ref={titleRef} required />
      </label>
      <label>
        <span>Description</span>
        <textarea ref={descriptionRef}></textarea>
      </label>
      <button type="submit">Add</button>
    </form>
  )
}
