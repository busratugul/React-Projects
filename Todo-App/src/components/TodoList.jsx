import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { FaRegTrashAlt, FaPencilAlt, FaSave } from 'react-icons/fa'
import '../App.css'
import { clsx } from 'clsx'

function TodoList() {
  const {
    content,
    setContent,
    todoList,
    deleteTodo,
    completedTodo,
    editTodo,
    editedTodo,
    newTodo,
    setNewTodo,
  } = useContext(TodoContext)

  return (
    <>
      <h3 className="header">{todoList.length > 0 && 'List'}</h3>
      {todoList.map((todo) => (
        <div key={todo.id} className="list">
          <div
            className={todo.isCompleted ? 'todo completed' : 'todo'}
            onClick={() => completedTodo(todo.id)}
          >
            {editTodo ? (
              <input
                className="edit-input"
                placeholder={todo.text}
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
            ) : (
              todo.text
            )}
          </div>
          <div className="icons">
            {editTodo ? (
              <button className="btn save">
                <FaSave />
              </button>
            ) : (
              <>
                <button
                  className="btn edit"
                  onClick={() => editedTodo(todo.id)}
                >
                  <FaPencilAlt />
                </button>
                <button
                  className="btn delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FaRegTrashAlt />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export default TodoList
