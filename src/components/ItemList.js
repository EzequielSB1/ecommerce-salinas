import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {

  const details = false

  return (
    <div>
      {productos.map(producto=>{
        return(
          <Item key={producto.id} producto={producto}/>
        )
      })}
    </div>
  )
}

export default ItemList