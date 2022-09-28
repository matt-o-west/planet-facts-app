import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id='menu-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} className='menu-item'>
          <Link to='/mercury'>Mercury</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className='menu-item'>
          <Link to='/venus'>Venus</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className='menu-item'>
          <Link to='/earth'>Earth</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className='menu-item'>
          <Link to='/mars'>Mars</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className='menu-item'>
          <Link to='/jupiter'>Jupiter</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className='menu-item'>
          <Link to='/saturn'>Saturn</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className='menu-item'>
          <Link to='/uranus'>Uranus</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default BasicMenu
