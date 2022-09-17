//import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import {BrowserRouter as Router} from "react-router-dom"

function App() {


  return (
  <Router>
    <main className="App">
      <Nav />
    </main>
  </Router>
  )
}

export default App
