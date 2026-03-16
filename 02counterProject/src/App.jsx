import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[ count, setCounter] = useState(9);

  function addValue() {
    // count++;
    console.log(count); 
    setCounter(count++)
  }
  function removeValue(){
    // if(count!=0){
    //    count--;
    console.log(count);
    setCounter(count--);
    // setCounter(--count);
    }
  
  return (
    <>
      <h1>Hello</h1>
      <h3>Count Value: {count}</h3>

      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
