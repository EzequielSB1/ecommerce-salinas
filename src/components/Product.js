import React from 'react'

const Product = (props) => {
  return (
    <div className='product'>
            <h6>{props.item.nombre}</h6>
            <img src={props.item.imagen} alt={props.item.nombre}/>
            <p>${props.item.precio}</p>
        </div>
  )
}

export default Product