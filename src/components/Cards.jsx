//import {Link} from "react-router-dom"
import "./Nav.css"
import "./Cards.css"

function Cards() {


    return (
      <div className="cards"> 
        <div className="card">  
            <div className="card-title">ROTATION TIME</div>
            <div className="card-value">58.6 Days</div>
        </div>  
        <div className="card">  
            <div className="card-title">REVOLUTION TIME</div>
            <div className="card-value">87.97 Days</div>
        </div>  
        <div className="card">  
            <div className="card-title">RADIUS</div>
            <div className="card-value">2,439.7 KM</div>
        </div>  
        <div className="card">  
            <div className="card-title">AVERAGE TEMP.</div>
            <div className="card-value">430°c</div>
        </div>  
      </div>
    )
  }
  
  export default Cards