import React from 'react'
import './App.css'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='App'>
      <h1 className='header'>ToDo App</h1>
      <InputTodo/>
      <TodoList/>
    </div>
  )
}

export default App
