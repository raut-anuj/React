import { useState } from 'react'

function App() {
  const [colour, setColour] = useState('pink')

  return (
    //by default window colour
      <div className='w-500 h-100 duration-200' 
      style={{backgroundColor: colour}}
      >
    
      {/* //buttons */}
      <div>
        <button onClick={() => setColour("blue")}>Blue</button>
        <button onClick={() => setColour("green")}>Green</button>
        <button onClick={() => setColour("pink")}>Pink</button>
        <button onClick={() => setColour("black")}>Black</button>
        <button onClick={() => setColour("white")}>White</button>
        <button onClick={() => setColour("yellow")}>Yellow</button>
        <button onClick={() => setColour("orange")}>Orange</button>
        <button onClick={() => setColour("violet")}>Violet</button>
        <button onClick={() => setColour("olive")}>Olive</button>
      </div>
      </div>
  )
}

export default App
