import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function FormTodo() {
  const { content, setContent, addTodo } = useContext(TodoContext)
  return (
    <form onSubmit={addTodo}>
      
      <input
        type="text"
        placeholder="What are you planning to do today? "
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" disabled={!content} className='btn add'>
        Add
      </button>
    </form>
  )
}

export default FormTodo
