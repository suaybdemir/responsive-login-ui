import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/LoginForm'
import LoginForm from './components/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LoginForm />
  )
}

export default App;
