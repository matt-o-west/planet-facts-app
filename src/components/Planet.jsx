import "./Planet.css";
import Button from "./Button"
import Cards from "./Card"

function Planet() {


    return (
      <div>
      <div className="planet-image"><img src="src/assets/planet-mercury.svg"></img></div>
        <span className="planet">Mercury</span>
        <div className="overview">
            <p>
                Mercury is the smallest planet in our solar system and closest to the sun. It is only slightly larger than Earth's moon. Mercury is the fastest planet, zipping around the sun every 88 Earth days.
            </p>
        </div>
        <Button>Overview</Button>
        <Button>Internal Structure</Button>
        <Button>Surface Geology</Button>
        <div className="cards">
            <Cards />
        </div> 
      </div>

    )
  }
  
  export default Planet