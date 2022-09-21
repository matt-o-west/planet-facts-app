import {Link} from "react-router-dom"
import "./Nav.css"

function Nav(props) {


    return (
      <nav>
            <span className="logo">The Planets</span>
            <div className="planet-links">
            <ul>
              <Link to="/mercury">Mercury</Link>
              <Link to="/venus">Venus</Link>
              <Link to="/earth">Earth</Link>
              <Link to="/mars">Mars</Link>
              <Link to="/jupiter">Jupiter</Link>
              <Link to="/saturn">Saturn</Link>
              <Link to="/uranus">Uranus</Link>
              <Link to="/neptune">Neptune</Link>
            </ul>
            </div>
      </nav>
    )
  }
  
  export default Nav