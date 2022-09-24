

//import {Link} from "react-router-dom"
import "./Nav.css"
import "./Cards.css"

function Cards(props) {

  console.log(props.facts.rotation)
  const temp = props.facts.temperature.match(/\d+/g).map(Number) + " °C"

    return (
      <div className="cards"> 
        <div className="card">  
            <div className="card-title">ROTATION TIME</div>
            <div className="card-value">{props.facts.rotation}</div>
        </div>  
        <div className="card">  
            <div className="card-title">REVOLUTION TIME</div>
            <div className="card-value">{props.facts.revolution}</div>
        </div>  
        <div className="card">  
            <div className="card-title">RADIUS</div>
            <div className="card-value">{props.facts.radius}</div>
        </div>  
        <div className="card">  
            <div className="card-title">AVERAGE TEMP.</div>
            <div className="card-value">{temp}</div>
        </div>  
      </div>
    )
  }
  
  export default Cards