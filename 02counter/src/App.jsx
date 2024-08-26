import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
// let counter = 5

let addValue = () => {
  if(counter >= 20){
    setCount(20)
  }else{
    setCount(counter + 1)
    console.log("clicked", counter);
  }
}

let removeValue = () =>{
  if(counter <= 0){
    setCount(0)
  }else{
    setCount(counter - 1)
    console.log("clicked", counter);
  }
  
}

  return (
    <>
    <h1>You allow only to increase value from 0 to 20 but the value shoud not be less then 0</h1>
    <h2>Chai aur React</h2>
    <h3>Counter value :{counter}</h3>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
