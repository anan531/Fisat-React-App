import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './components/AddStudent'
import SearchStud from './components/SearchStud'
import DelStudent from './components/DelStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddStudent/>
      <SearchStud/>
      <DelStudent/>
    </>
  )
}

export default App
