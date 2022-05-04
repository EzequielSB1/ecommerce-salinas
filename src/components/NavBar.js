// imports
import React from 'react'
import { Link } from 'react-router-dom'

// component
const Nav = (props) => {
  
  if (props.navbar) {
    return (
      <nav className='nav'>
          <Link to="/electronica" className='nav__link'>Electronica</Link>
          <Link to="/vestimenta" className='nav__link'>Vestimenta</Link>
          <Link to="/vehiculos" className='nav__link'>Vehiculos</Link>
      </nav>
    )
  } else {
    return (
      <nav className='nav'>
        <Link to="/" className='nav__link'>Inicio</Link>
        <Link to="/contacto" className='nav__link'>Contacto</Link>
      </nav>
    )
  }



}

// export
export default Nav