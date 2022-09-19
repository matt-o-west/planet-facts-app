//import {Link} from "react-router-dom"
import "./Nav.css"
import "./Cards.css"

function Cards() {


    return (
      <div className="cards"> 
        <div className="card">  
            <div className="card-title">Rotation Time</div>
            <div className="card-value">58.6 Days</div>
        </div>  
        <div className="card">  
            <div className="card-title">Revolution Time</div>
            <div className="card-value">87.97 Days</div>
        </div>  
        <div className="card">  
            <div className="card-title">Radius</div>
            <div className="card-value">2,439.7 KM</div>
        </div>  
        <div className="card">  
            <div className="card-title">Average Temp.</div>
            <div className="card-value">430°c</div>
        </div>  
      </div>
    )
  }
  
  export default Cards