import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext'
import { useTheme } from '../hooks/useTheme'

import './Navbar.css'

const Navbar = () => {
  
  const { color } = useTheme()

  return (
    <div className='navbar' style={{background: color}}>
        <nav>
            <Link to='/' className='brand'>
                <h1>Elio The Cook</h1>
            </Link>
            <Link to='/create'>
                Create Recipes
            </Link>
        </nav>
    </div>
  )
}

export default Navbar
