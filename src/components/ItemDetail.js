import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { cartContext } from './CartContext';

import ItemCount from './ItemCount'
import Item from './Item';

const ItemDetail = ({producto}) => {

  const [cartItems, setCartItems] = useState(0);
  const { addItem } = useContext(cartContext);
  const [verContador, setVerContador] = useState(false)

  const onAdd = (counter) => {
    setCartItems(counter)
    addItem(producto, setCartItems)
  }

  const funcionVerContador = () => {
    setVerContador(true)
  }


  return (

    <div className='cardDetails'>
    <h6>{producto.nombre}</h6>
    <div>
    <img src={producto.imagen} alt={producto.nombre}/>
    </div>
    <p>{producto.descripcion}</p>
    <ItemCount onAdd={onAdd} onCount={funcionVerContador} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} init={producto.counter} />
    <Link to="/cart">
      <button className='btnFinalizar'>Finalizar compra</button>
    </Link>
    </div>

  )

}

export default ItemDetail