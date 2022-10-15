import './List.scss'
import ListColumn from './ListColumn/ListColumn.jsx'

export default (props) => {
  let newTodos = props.todos.filter(todo => todo.status === "todo")
  let progressTodos = props.todos.filter(todo => todo.status === "in_progress")
  let doneTodos = props.todos.filter(todo => todo.status === "done")

  return(
    <div className="list_wrapper">
      <ListColumn name="TODO" todos={newTodos} />
      <ListColumn name="IN PROGRESS" todos={progressTodos} />
      <ListColumn name="DONE" todos={doneTodos} />
    </div>
  )
}
