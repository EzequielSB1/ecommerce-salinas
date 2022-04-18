// imports
import React from 'react'

// component
const ItemListContainer = (props) => {
  if (props.filtros) {
    return (
      <div className='filter'>
        <p>
          Este es el main de los filtros.
        </p>
      </div>
    )
  } else {
    return (
      <div className='products'>
        <p>
          Este es el main de los productos
        </p>
        <p>
          Este es el main de los productos
        </p>
        <p>
          Este es el main de los productos
        </p>
        <p>
          Este es el main de los productos
        </p>
        <p>
          Este es el main de los productos
        </p>
      </div>
    )
  }
}

// exports
export default ItemListContainer