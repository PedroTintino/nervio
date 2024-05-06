import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './pages/Intro'
import Navbar from './components/Navbar'
import Pilots from './pages/Pilots'

function App() {
  return (
    <div className="App bg-slate-950 ">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Intro /> }></Route>
        <Route path='/pilots' element={ <Pilots /> }></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App
