import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
     <h1>Count {value} </h1>

     <button onClick={
      () => {
        setValue(value + 1);
      }
     } >Add</button>
    </>
  )
}

export default App
