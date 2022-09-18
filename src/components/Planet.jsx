import "./Planet.css";
import Button from "./Button"
import Card from "./Card"

function Planet() {


    return (
      <div>
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
            <Card />
            <Card />
            <Card />
        </div> 
      </div>

    )
  }
  
  export default Planet