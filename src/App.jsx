import { useState } from 'react'
import Header from './components/header'
import Profile from './components/profile'
import About from './components/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Profile/>
      <About/>
    </>
  )
}

export default App
