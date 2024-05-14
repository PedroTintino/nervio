import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './pages/Intro'
import Navbar from './components/Navbar'
import Pilots from './pages/Pilots'
import Pilot from './pages/Pilot'
import data from './api/pilots_data.json'

function App() {
  return (
    <div className="App bg-slate-950 ">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Intro data={data} /> }></Route>
        <Route path='/pilots' element={ <Pilots /> }></Route>
        <Route path="/pilot/:id" element={<Pilot data={data} />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
