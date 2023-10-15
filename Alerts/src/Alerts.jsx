import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Alert from './Alert'

function App() {
 
  return (
   <div className="container">
    <div className='alerts'>
    <Alert type={"success"} message={"Successful login"}/>
    <Alert type={"info"} message={"Time Triggered"} delay={true}/>
    <Alert type={"danger"} message={"Warning!"} delay={true} delayTime={1000}/>
    </div>
     </div>
  )
}

export default App
