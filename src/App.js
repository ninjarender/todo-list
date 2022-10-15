import { useState, useEffect } from 'react';

import './App.scss';
import Main from './Components/Main/Main'

export default () => {
  const [todos, setTodos] = useState([])

  const createTodo = (title, description) => {
    let newTodoItem = {
      id: new Date().getTime(),
      title: title,
      description: description,
      status: "todo",
      created_at: new Date()
    }

    setTodos([newTodoItem, ...todos]);
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    setTodos(todos)
	}, [])

  useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos])

  return (
    <div className="App">
      <header>
        <img src="https://edita.com.eg/wp-content/uploads/2020/06/todo-logo.png" alt="logo" />
      </header>
      <Main todos={todos} createTodo={createTodo} />
    </div>
  );
}
