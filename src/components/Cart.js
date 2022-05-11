import React from 'react'
import Product from './Product'
import { useContext } from 'react'
import { cartContext } from './CartContext'

const Cart = () => {

  const { cart, clearCart, removeItem } = useContext(cartContext)

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cart.map(item=>{
          return(
            <Product key={item.id} producto={item}/>
          )
        })}
      </ul>
      <p>Precio total: ${}</p>
    </div>
  )
}

export default Cart