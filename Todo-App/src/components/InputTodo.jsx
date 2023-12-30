import React, { useEffect } from 'react'
import { useContext } from 'react'
import { InputContext } from '../context/InputContext'

function InputTodo() {
  const { input, setInput, todoAdd, inputRef,id } = useContext(InputContext)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <input
        id={id}
        placeholder="What are you planning to do today ?"
        value={input.text}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button onClick={todoAdd} disabled={!input}>
        Add
      </button>
    </div>
  )
}

export default InputTodo
