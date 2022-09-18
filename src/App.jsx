//import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Planet from './components/Planet'
import {BrowserRouter as Router} from "react-router-dom"

function App() {


  return (
  <Router>
    <main className="App">
      <Nav />
      <Planet />
    </main>
  </Router>
  )
}

export default App
