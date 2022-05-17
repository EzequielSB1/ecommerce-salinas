import React from 'react'
import { useContext } from 'react'
import { cartContext } from './CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {

  const { cart, clearCart, removeItem } = useContext(cartContext)

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cart.map((item, quantity) => {
          return(
            <li key={item.item.id} >
              <img src={item.item.imagen}/>
              <h6>{item.item.nombre}</h6>
              <p>{item.quantity}</p>
              <button onClick={removeItem}>X</button>
            </li>
          )
        })
        /* {cart=[] ? `No hay productos en el carrito ${<Link to="/"></Link>}` : cart.map((item, quantity) => {
          return(
            <li key={item.item.id} >
              <img src={item.item.imagen}/>
              <h6>{item.item.nombre}</h6>
              <p>{item.quantity}</p>
              <button onClick={removeItem}>X</button>
            </li>
          )
        })} */}
      </ul>
      <p>Precio total: ${}</p>
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}

export default Cart