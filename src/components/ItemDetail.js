import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = (props) => {

  return (
    <div className='cardDetails'>
      <h6>{props.nombre}</h6>
      <img src={props.imagen} alt={props.nombre}/>                
      <p>{props.descripcion}</p>
      <ItemCount stock={props.stock} init={props.counter} />
    </div>
  )
}

export default ItemDetail


