import { useState, useEffect } from 'react';

import Form from './Components/Form/Form'
import List from './Components/List/List'

import './App.scss';

export default () => {
  const [todos, setTodos] = useState([])

  const createTodo = (title, description) => {
    let newTodoItem = {
      id: new Date().getTime(),
      title: title,
      description: description,
      status: "todo",
    }

    setTodos([newTodoItem, ...todos]);
  }

  const updateTodo = (id, status) => {
    todos.find(todo => {
      if (todo.id === id) {
        todo.status = status
      }

      return setTodos([...todos])
    })
  }

  const deleteTodo = (id) => {
    let newTodos = todos.filter(todo => todo.id !== id)

    setTodos([...newTodos])
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
      <main>
        <Form createTodo={createTodo} />
        <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </main>
    </div>
  );
}
