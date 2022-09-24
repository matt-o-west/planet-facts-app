//import {Link} from "react-router-dom"
import './Buttons.css'

function Buttons(props) {
  console.log(props.onClick)

  return (
    <div>
      <div className='buttons'>
        <button className='btn' onClick={props.onClick}>
          Overview
        </button>
        <button className='btn' onClick={props.onClick}>
          Internal Structure
        </button>
        <button className='btn' onClick={props.onClick}>
          Surface Geology
        </button>
      </div>
    </div>
  )
}

export default Buttons
