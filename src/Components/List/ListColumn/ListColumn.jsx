import './ListColumn.scss'
import ListItem from './ListItem/ListItem'

export default (props) => {
  return(
    <div className="list_column">
      <h2>{props.name}</h2>
      <ul>
        {props.todos.map(todo => {
          return(
            <ListItem key={todo.id} todo={todo} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} />
          )
        })}
      </ul>
    </div>
  )
}
