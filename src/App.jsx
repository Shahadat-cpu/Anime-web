import { useState } from 'react'
import './index.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button className="btn">
        Buy Now
      </button>
    </div>
  )
}

export default App
