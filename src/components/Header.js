// imports
import React from 'react'
import CartWidget from './CartWidget'
import NavBar from './NavBar'

// component
const Header = () => {
  
  const navbar = true
  const footer = false

  return (
    <header className='header'>
        <h1 className='header__title'>Mercado Oscuro</h1>
        <NavBar navbar={navbar}/>
        <CartWidget/>
    </header>
  )
}

// export
export default Header