import { useState } from 'react'

function App() {
  const [color, setColor] = useState(null)

  function Click(r) {
    setColor(r)
  }

  return (
    <>
      <h1>Selected Color : {color}</h1>
      <button onClick={() => Click('Red')}>Red</button>
      <button onClick={() => Click('Blue')}>Blue</button>
      <button onClick={() => Click('Green')}>Green</button>
      <button onClick={() => Click('Yellow')}>Yellow</button>
      <button onClick={() => Click(null)}>clear</button>
    </>
  )
}

export default App
