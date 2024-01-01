import React from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='App'>
      <h1 className='header'>ToDo App</h1>
    <TodoProvider>
      <FormTodo/>
      <TodoList/>
    </TodoProvider>
    </div>
  )
}

export default App
