import './ListItem.scss'

export default (props) => {
  let dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }

  return (
    <li className="list_item">
      <div>
        <label>
          <input type="checkbox" />
          <h3>{props.todo.title}</h3>
        </label>
        <select defaultValue={props.todo.status}>
          <option value="todo">ToDo</option>
          <option value="in_progress">In progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <p className='description'>{props.todo.description}</p>
      <p className='created_at'>Created: {props.todo.created_at.toLocaleDateString('en-US', dateOptions)}</p>
    </li>
  )
}
