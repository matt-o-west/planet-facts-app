import "./Planet.css";
import Buttons from "./Buttons"
import Cards from "./Cards"
import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import Data from "../data.json"

function Planet() {
  const [planets, setPlanets] = useState({})
  const params = useParams()
  //const [loading, setLoading] = useState(true)

  function handleClick(event) { 
    setPlanets(event.target.value)
  }


  useEffect(() => {
    Data.forEach(planet => {
      if (params.planets === planet.name) {
        setPlanets(planet)
      }
    })
    //setLoading(false)
  }, [params])

  
  console.log(params.planets)
  //console.log(planet)
  console.log(params)


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
        <Buttons onClick={handleClick}/>
        <Cards facts={planets}/>

      </div>

    )
  }
  
  export default Planet