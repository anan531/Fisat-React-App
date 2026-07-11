import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './components/AddStudent'
import SearchStud from './components/SearchStud'
import DelStudent from './components/DelStudent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewStud from './components/ViewStud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
<Route path="/" element={<AddStudent/>}/>
<Route path="/search" element={<SearchStud/>}/>
<Route path="/del" element={<DelStudent/>}/>
<Route path="/view" element={<ViewStud/>}/>

  </Routes>
  
  </BrowserRouter>
    </>
  )
}

export default App
