import React, { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from './CartContext'
import { Link } from 'react-router-dom'
import { db } from './firebase'
import { addDoc, collection } from 'firebase/firestore'

const Cart = () => {

  const [idCompra, setIdCompra] = useState("")

  const { cart, clearCart, removeItem, carritoVacio, cantidadTotal, cantidadProducto } = useContext(cartContext)

  const finalizarCompra = () => {

    const ordenesCollection = collection( db, "ordenes")

    const orden = {
      buyer : {
        name : "pedro",
        phone : "25368745",
        email : "trucho@test.com"
      },
      items : cart,
      date : "", 
      total : 10000
    }

    const consulta = addDoc(ordenesCollection, orden)

    consulta.then((resultado) => {
      setIdCompra(resultado.id)
    })
    consulta.catch((error) => {
      console.log(error)
    })

  }

  return (
    <div className='cartView'>
      <h1 className='cartTitle'>Sus compras</h1>
      <ul className='cartList'>
        
        {cart.map((producto) => {
        return(
          <li className='cartItemProduct' key={producto.id}>
            <img src={producto.imagen}/>
            <h6>{producto.nombre}</h6>
            <p>{producto.cantidadProducto}</p>
            <button onClick={removeItem}>X</button>
          </li>
        )
        }) 
        /* {carritoVacio ? <li className='cartItemNoProduct'><p className='cartItemText'>No hay productos en el carrito</p><Link className='buttonCartMenu' to="/">Ir al buscador de productos</Link></li> : cart.map((item, quantity) => {
        return(
          <li className='cartItemProduct' key={item.item.id}>
            <img src={item.item.imagen}/>
            <h6>{item.item.nombre}</h6>
            <p>{item.quantity}</p>
            <button onClick={removeItem}>X</button>
          </li>
        )
        })} */}
      </ul>
      <p>Precio total: ${cantidadTotal}</p>
      <button onClick={clearCart}>Limpiar carrito</button>
      <button onClick={finalizarCompra}>Finaliar Compra</button>
      {idCompra && <h3>compra guardada, su codigo de compra es: {idCompra}</h3>}
    </div>
  )
}

export default Cart