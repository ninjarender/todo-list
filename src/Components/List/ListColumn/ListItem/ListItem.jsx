import './ListItem.scss'

export default (props) => {
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
    </li>
  )
}
