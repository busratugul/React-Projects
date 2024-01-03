import React, { useContext } from 'react'
import { FooterContext } from '../context/FooterContext'
import { TodoContext } from '../context/TodoContext'

function Footer() {
  const { todoList, setTodoList } = useContext(TodoContext)
  const { setFilter, todoLeft } = useContext(FooterContext)
  return (
    <>
      {todoList.length > 0 ? (
        <div className="footer">
          <div>
            <small>
              {todoLeft.length}
              {todoLeft.length === 1 ? ' item' : ' items'} left
            </small>
          </div>
          <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('active')}>Active</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
          </div>
          <div>
            <button onClick={() => setTodoList([])}>Clear completed</button>
          </div>
        </div>
      ) : (
        ''
      )}{' '}
    </>
  )
}

export default Footer
