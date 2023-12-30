import React, { createContext, useState, useRef } from 'react'
import { v4 as uuid4 } from 'uuid'

export const InputContext = createContext()
let id = uuid4()

export const InputProvider = ({ children }) => {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const todoAdd = () => {
    setList([...list, input])
    console.log(input, id)
    setInput('')
    inputRef.current.focus()
  }

  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item !== id)
    setList(updatedList)
  }
  const inputRef = useRef(null)

  const values = {
    input,
    id,
    setInput,
    list,
    setList,
    todoAdd,
    deleteItem,
    inputRef,
  }

  return (
    <InputContext.Provider value={values}>{children}</InputContext.Provider>
  )
}
