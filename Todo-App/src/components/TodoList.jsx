import React, { useContext, useEffect } from 'react'
import { InputContext } from '../context/InputContext'
import { FaRegTrashAlt } from 'react-icons/fa'

function TodoList() {
  const { list, setList, deleteItem, completed } =
    useContext(InputContext)

  useEffect(() => {
    const storedList = localStorage.getItem('todolist')
    if (storedList) {
      setList(JSON.parse(storedList))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(list))
  }, [list])

  return (
    <>
      <h4 className="header">{list.length != 0 ? 'List' : ''}</h4>
      <ul className="list">
        {list.map((item,id) => (
          <li
            key= {id}
            className={`item ${completed}`}
          >
            {item}
            <FaRegTrashAlt onClick={() => deleteItem(item)} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
