import './ListItem.scss'

export default () => {
  return (
    <li className="list_item">
      <div>
        <label>
          <input type="checkbox" />
          <h3>Ticket title</h3>
        </label>
        <p>Ticket Description</p>
      </div>
      <div>
        <select defaultValue="todo">
          <option value="todo">ToDo</option>
          <option value="in_progress">In progress</option>
          <option value="done">Done</option>
        </select>
        <p>Created: today</p>
        <p>Estimate: 3h</p>
      </div>
    </li>
  )
}
