import { createRef } from 'react'

import './ListItem.scss'

export default (props) => {
  let selectRef = createRef()

  const selectHandler = (id) => {
    let selectValue = selectRef.current.value

    if (selectValue === 'done') {
      props.deleteTodo(id)
    } else {
      props.updateTodo(id, selectValue)
    }
  }

  return (
    <li className='list_item'>
      <div>
        <h3>{props.todo.title}</h3>
        <select defaultValue={props.todo.status} ref={selectRef} onChange={() => selectHandler(props.todo.id)}>
          <option value='todo'>ToDo</option>
          <option value='in_progress'>In progress</option>
          <option value='done'>Done</option>
        </select>
      </div>
      <p className='description'>{props.todo.description}</p>
    </li>
  )
}
