//import {Link} from "react-router-dom"
import "./Buttons.css"

function Buttons(props) {
    console.log(props)

    return (
      <div>
        <div className="buttons">
        <button className="btn" ref={props.ref}>Overview</button>
        <button className="btn" ref={props.ref}>Internal Structure</button>
        <button className="btn" ref={props.ref}>Surface Geology</button>
        </div>
      </div>
    )
  }
  
  export default Buttons