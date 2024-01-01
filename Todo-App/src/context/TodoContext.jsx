import React, { createContext, useState } from 'react'
import { v4 as uuid4 } from 'uuid'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  //STATES
  const [content, setContent] = useState('')
  const [todoList, setTodoList] = useState([])
  const [editTodo, setEditTodo] = useState(false)
  const [newInput, setNewInput] = useState()

  //Form Submit olduğunda yeni todo oluşturup listeye ekleme ve inputu temizleme
  const addTodo = (event) => {
    event.preventDefault()
    const newTodo = {
      id: uuid4(),
      text: content,
      isCompleted: false,
    }
    setTodoList([...todoList, newTodo])
    setContent('')
  }

  const deleteTodo = (id) => {
    const filteredList = todoList.filter((todo) => todo.id !== id && todo)
    setTodoList(filteredList)
  }

  const completedTodo = (id) => {
    const completedList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
    )
    setTodoList(completedList)
  }

  const editedTodo = (id) => {
    [...todoList.map((todo) =>
      todo.id === id && !todo.isCompleted 
        ? setEditTodo(true)
        : setEditTodo(false)
    ), ...todoList]
  }

  //CONTEXT PROPSLARI
  const initialValues = {
    content,
    setContent,
    addTodo,
    todoList,
    setTodoList,
    deleteTodo,
    completedTodo,
    editTodo,
    editedTodo,
  }

  return (
    <TodoContext.Provider value={initialValues}>
      {children}
    </TodoContext.Provider>
  )
}
