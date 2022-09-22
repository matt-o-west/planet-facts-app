import "./Planet.css";
import Buttons from "./Buttons"
import Cards from "./Cards"
import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import Data from "../data.json"

function Planet() {
  const {planet} = useParams()
  const [planets, setPlanets] = useState([])
  console.log(planet)

  useEffect(() => { 
    Data.map(item => {
     if (item === planet) {
       setPlanets(planet)
     }
    })
  }, [])

    return (
      <div>
      <div className="planet-image"><img src="src/assets/planet-mercury.svg"></img></div>
      <div className="planet-info">
        <span className="planet-title">Mercury</span>
        <div className="overview">
            <p>
                Mercury is the smallest planet in our solar system and closest to the sun. It is only slightly larger than Earth's moon. Mercury is the fastest planet, zipping around the sun every 88 Earth days.
            </p>
        </div>
        </div>
        <Buttons onClick={props.onClick}/>
        <Cards facts={props.facts}/>

      </div>

    )
  }
  
  export default Planet