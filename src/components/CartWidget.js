import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from './CartContext'

const CartWidget = () => {

    const {cantidad_total} = useContext(cartContext)

    return (
        <div className='Menu'>
            <Link to="/cart">
                <span className='material-icons'>
                    shopping_cart
                </span>
            </Link>
            <div className='countProducts'>
                {cantidad_total}
            </div>
        </div>
    )
}

export default CartWidget