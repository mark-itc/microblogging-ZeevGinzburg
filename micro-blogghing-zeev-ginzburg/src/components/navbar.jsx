import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar () {
  const activeClassName = 'viewed'

  return (
    <nav className='Navbar'>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/userprofile'
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Profile
          </NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar;
