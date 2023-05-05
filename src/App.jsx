import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pin from "./components/Pin"
function App() {
  const [pinInput, setPinInput] = useState("") ;
  const [toggle ,setToggle]=useState(false) ;
  const handleChange =()=>{
    
    setToggle(!toggle)
    
  }
 
  return (
    <div className='app'>
      <button onClick={handleChange}>Click to enter OTP </button>
      {toggle?<div><h1>OTP is {pinInput}</h1>
     <Pin length={6} pinSet={setPinInput}/></div>:null}
     
    </div>
  )
}

export default App
