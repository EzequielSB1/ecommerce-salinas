import React from 'react'

const Product = ({item, borrar, quantity}) => {
  return (
    <div className='product'>
            <h6>{item.nombre}</h6>
            <img src={item.imagen} alt={item.nombre}/>
            <p>${item.precio}</p>
            <p>{quantity} {item.nombre}</p>
            <button onClick={borrar}>X</button>
        </div>
  )
}

export default Product