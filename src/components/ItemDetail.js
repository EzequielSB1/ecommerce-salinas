import React from 'react'
import Item from './Item'

const ItemDetail = ({productos}) => {

    const details = true

  return (
    <div>
        {productos.map(producto=>{
            return(
                <Item key={producto.id} producto={producto} details={details}/>
            )
        })}
    </div>
  )
}

export default ItemDetail