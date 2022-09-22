//import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Planet from './components/Planet'
import {Route} from "react-router-dom"
import {useState} from 'react'
import Data from "./data.json"

function App() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)

  function handleClick(event) { 
    setPlanets(event.target.value)
  }

  console.log(Data[0].name)
  console.log(planets)

  console.log(planets)

  return (
    <main className="App">
      <Nav />
      <Planet />
    </main>
  )
}

export default App