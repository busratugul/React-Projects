import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { InputProvider } from './context/InputContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <InputProvider>
    <App />
  </InputProvider>
)
