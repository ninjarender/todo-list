import Form from '../Form/Form.jsx'
import List from '../List/List.jsx'

export default (props) => {
  return(
    <main>
      <Form createTodo={props.createTodo} />
      <List todos={props.todos} />
    </main>
  )
}
