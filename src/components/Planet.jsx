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

  //console.log(Data.forEach((planet) => {console.log(planet)}))
  console.log(planets)

  useEffect(() => {
    Data.forEach(planet => {
      if (params.planets.toLowerCase() === planet.name.toLowerCase()) {
        
        setPlanets(planet)
        //console.log(planet.overview)
      }
    })
    //setLoading(false)
  }, [params])




    return (
      <div>
      <div className="planet-image"><img src={"src/assets/planet-mercury.svg"}></img></div>
      <div className="planet-info">
        <span className="planet-title">{planets.name}</span>
        <div className="overview">
            <p>
              {planets.overview.content}
            </p>
        </div>
        </div>
        <Buttons onClick={handleClick}/>
        <Cards facts={planets}/>

      </div>

    )
  }
  
  export default Planet