// imports
import React from 'react'

// component
const Nav = (props) => {
  
  if (props.navbar) {
    return (
      <nav className='nav'>
          <span className='material-icons'>person</span>
          <a href="#" className='nav__link'>Inicio</a>
          <a href="#" className='nav__link'>Categorias</a>
          <a href="#" className='nav__link'>Contacto</a>
      </nav>
    )
  } else {
    return (
      <nav className='nav'>
        <a href="#" className='nav__link'>Inicio</a>
        <a href="#" className='nav__link'>Contacto</a>
      </nav>
    )
  }



}

// export
export default Nav