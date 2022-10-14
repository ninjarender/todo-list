import './List.scss'
import ListColumn from './ListColumn/ListColumn.jsx'

export default () => {
  return(
    <div className="list_wrapper">
      <ListColumn name="TODO" />
      <ListColumn name="IN PROGRESS" />
      <ListColumn name="DONE" />

      {/* <div className="list_column">
        <h2></h2>
        <ul>
          <li>
            <div>
              <label>
                <input type="checkbox" />
                <h3>Ticket title</h3>
              </label>
              <p>Ticket Description</p>
            </div>
            <div>
              <select defaultValue="in_progress">
                <option value="todo">ToDo</option>
                <option value="in_progress">In progress</option>
                <option value="done">Done</option>
              </select>
              <p>Start: today</p>
              <p>End: yesterday</p>
            </div>
          </li>
        </ul>
      </div> */}
      {/* <div className="list_column">
        <h2>DONE</h2>
        <ul>
          <li>
            <div>
              <label>
                <input type="checkbox" />
                <h3>Ticket title</h3>
              </label>
              <p>Ticket Description</p>
            </div>
            <div>
              <select defaultValue="done">
                <option value="todo">ToDo</option>
                <option value="in_progress">In progress</option>
                <option value="done">Done</option>
              </select>
              <p>Started: today</p>
              <p>Ended: yesterday</p>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  )
}