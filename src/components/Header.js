// imports
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import NavBar from './NavBar'

// component
const Header = () => {
  
  const navbar = true
  const footer = false

  return (
    <header className='header'>
      <Link to="/">
        <h1 className='header__title'>Mercado Oscuro</h1>
      </Link>
        <NavBar navbar={navbar}/>
        <CartWidget/>
    </header>
  )
}

// export
export default Header