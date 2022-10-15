import ListColumn from './ListColumn/ListColumn'

import './List.scss'

export default (props) => {
  let newTodos = props.todos.filter(todo => todo.status === 'todo')
  let progressTodos = props.todos.filter(todo => todo.status === 'in_progress')

  return(
    <div className='list_wrapper'>
      <ListColumn name='TODO' todos={newTodos} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} />
      <ListColumn name='IN PROGRESS' todos={progressTodos} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} />
    </div>
  )
}
