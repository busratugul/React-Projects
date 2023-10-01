import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Buttons';
import React, {useState} from 'react';



function App() {
const [temperature, setTemperature] = useState(0)

const handlePlus = () => {
  setTemperature(temperature + 1)
}
const handleMinus = () => {
  setTemperature(temperature - 1)
}


  return (
    <div className="App">
      <div className="container"
      style={{width:300}}>
      <h1 
        className={`text
        ${temperature > 0 ?"bg-danger" :"bg-info"}`}
        style={{height:250, width: 250, border:"2px solid #666", borderRadius:500}}>
        {temperature}</h1>

        <div className="buttons">
          <Buttons text="-" 
          onClick={handleMinus} btnClass ={"btn-lg"} />
        
          <Buttons 
          text="+" 
          onClick={handlePlus} className ={"btn-lg"} />
        </div>

      </div>
      </div>
  )
}

export default App
