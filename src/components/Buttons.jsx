//import {Link} from "react-router-dom"
import './Buttons.css'

function Buttons(props) {
  console.log(props)

  return (
    <div>
      <div className='buttons'>
        <button className='btn' onClick={props.onClick} id={props.id.name}>
          Overview
        </button>
        <button className='btn' onClick={props.onClick} id={props.id.name}>
          Internal Structure
        </button>
        <button className='btn' onClick={props.onClick} id={props.id.name}>
          Surface Geology
        </button>
      </div>
    </div>
  )
}

export default Buttons
