import React from 'react'

import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {


  console.log("hola",producto)

  return (

    <div className='cardDetails'>

    <h6>{producto.nombre}</h6>

    <div>
    <img src={producto.imagen} alt={producto.nombre}/>
    </div>

    <p>{producto.descripcion}</p>

    <ItemCount nombre={producto.nombre} precio={producto.precio} stock={producto.stock} init={producto.counter} />

    </div>

  )

}

export default ItemDetail