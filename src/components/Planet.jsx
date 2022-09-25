import './Planet.css'
import Buttons from './Buttons'
import Cards from './Cards'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../data.json'

function Planet() {
  const [planets, setPlanets] = useState(Data[3])
  const [content, setContent] = useState('overview')
  const params = useParams()

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
    if (e.target.innerHTML === 'Overview') {
      setContent('overview')
    } else if (e.target.innerHTML === 'Internal Structure') {
      setContent('structure')
    } else if (e.target.innerHTML === 'Surface Geology') {
      setContent('geology')
    }
  }

  function toggleContent() {
    if (content === 'overview') {
      return (
        <div>
          <div className='planet-image' id={planets.name}>
            <img src={'src/assets/planet-' + planets.name + '.svg'}></img>
          </div>
          <div className='planet-info'>
            <span className='planet-title'>{planets.name}</span>
            <div className='overview'>
              <p>{planets.overview.content}</p>
            </div>
          </div>
        </div>
      )
    } else if (content === 'structure') {
      return (
        <div>
          <div className='planet-image' id={planets.name}>
            <img
              src={'src/assets/planet-' + planets.name + '-internal.svg'}
            ></img>
          </div>
          <div className='planet-info'>
            <span className='planet-title'>{planets.name}</span>
            <div className='overview'>
              <p>{planets.structure.content}</p>
            </div>
          </div>
        </div>
      )
    } else if (content === 'geology') {
      return (
        <div>
          <div className='planet-image' id={planets.name}>
            <img src={'src/assets/planet-' + planets.name + '.svg'}></img>
          </div>
          <div className='geology'>
            <img src={'src/assets/geology-' + planets.name + '.png'}></img>
          </div>
          <div className='planet-info'>
            <span className='planet-title'>{planets.name}</span>
            <div className='overview'>
              <p>{planets.geology.content}</p>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {toggleContent()}
      <Buttons onClick={handleClick} class={content} />
      <Cards facts={planets} />
    </div>
  )
}

export default Planet
