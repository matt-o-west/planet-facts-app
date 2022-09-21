//import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Planet from './components/Planet'
import {BrowserRouter as Router} from "react-router-dom"
import {useEffect, useState} from 'react'

function App() {
  const [planets, setPlanets] = useState([])
  const [id, setId] = useState(1)
  const [loading, setLoading] = useState(true)

  function handleClick(id) { 
    setId(id)
  }

  useEffect(() => {
    fetch(`src/assets/data.json`) 
      .then(response => response.json())
      .then(data => {
        setPlanets(data.name)
        setLoading(false)
      })
  }, [])

  console.log(planets)

  return (
  <Router>
    <main className="App">
      <Nav />
      <Planet facts={planets} onClick={handleClick}/>
    </main>
  </Router>
  )
}

export default App