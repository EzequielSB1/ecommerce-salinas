// imports
import React from 'react'
import ItemCount from './ItemCount'

// component
const ItemListContainer = ({filters,counter}) => {

  const onAdd = () => {

  }

  if (filters) {
    return (
      <section className='filter'>
        <p>
          Este es el main de los filtros.
        </p>
      </section>
    )
  } else {
    return (
      <section className='products'>
      <ItemCount stock={10} init={0} onAdd={onAdd}/>
      <ItemCount stock={50} init={0} onAdd={onAdd}/>
      <ItemCount stock={100} init={0} onAdd={onAdd}/>
      </section>
    )
  }
}

// exports
export default ItemListContainer