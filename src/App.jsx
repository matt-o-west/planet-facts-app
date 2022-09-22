//import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Planet from './components/Planet'
import {Route, Routes} from "react-router-dom"
//import {useEffect, useState} from 'react'
//import Data from "./data.json"

function App() {

  //console.log(Data[0].name)

  return (
    <main className="App">
        <Nav />
      <Routes>
        <Route path="/:planets" element={<Planet/>}/>
      </Routes>
    </main>
  )
}

export default App