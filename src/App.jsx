import { useState } from 'react'
import Header from './components/header'
import Profile from './components/profile'
import About from './components/about'
import Techstack from './components/experience'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Profile/>
      <About/>
      <Techstack/>
    </>
  )
}

export default App
