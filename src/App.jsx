import { useState } from 'react'
import Header from './components/header'
import Profile from './components/profile'
import About from './components/about'
import Techstack from './components/techstack'
import Projects from './components/projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Profile/>
      <About/>
      <Techstack/>
      <Projects/>
    </>
  )
}

export default App
