import './Planet.css'
import Buttons from './Buttons'
import Cards from './Cards'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../data.json'

function Planet() {
  const [planets, setPlanets] = useState(Data[3])
  const [content, setContent] = useState('overview')
  const params = useParams()
  const ref = useRef()
  //const [loading, setLoading] = useState(true)

  //console.log(Data.forEach((planet) => {console.log(planet)}))
  //console.log(planets)

  useEffect(() => {
    setPlanets(Data[3])
  }, [])

  useEffect(() => {
    Data.forEach((planet) => {
      if (params.planets.toLowerCase() === planet.name.toLowerCase()) {
        setPlanets(planet)
        //console.log(planet.overview)
      }
    })
    //setLoading(false)
  }, [params])

  function handleClick(e) {
    if (
      e.target.className === 'btn active' &&
      e.target.innerHTML === 'Overview'
    ) {
      setContent('overview')
    } else if (
      e.target.className === 'btn active' &&
      e.target.innerHTML === 'Internal Structure'
    ) {
      setContent('structure')
    } else if (
      e.target.className === 'btn active' &&
      e.target.innerHTML === 'Surface Geology'
    ) {
      setContent('geology')
    }
  }

  return (
    <div>
      <div className='planet-image'>
        <img src={'src/assets/planet-' + planets.name + '.svg'}></img>
      </div>
      <div className='planet-info'>
        <span className='planet-title'>{planets.name}</span>
        <div className='overview'>
          <p>{planets.overview.content}</p>
        </div>
      </div>
      <Buttons onClick={handleClick} class={content} />
      <Cards facts={planets} />
    </div>
  )
}

export default Planet
