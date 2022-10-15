import { useState, useEffect } from 'react';

import './App.scss';
import Header from './App/Components/Header/Header';
import Main from './App/Components/Main/Main'

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
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
		if (todos) {
			setTodos(todos)
		}
	}, [])

  return (
    <div className="App">
      <Header />
      <Main todos={todos} createTodo={createTodo} />
    </div>
  );
}
