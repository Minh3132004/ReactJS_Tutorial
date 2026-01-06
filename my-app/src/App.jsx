import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyComponent from './components/MyComponent.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent></MyComponent>
      <div>
        Hello World
      </div>
    </>
  )
}

export default App
