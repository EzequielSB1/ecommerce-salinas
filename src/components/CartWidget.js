import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <div className='Menu'>
            <Link to="/cart">
                <span className='material-icons'>
                    shopping_cart
                </span>
            </Link>
        </div>
    )
}

export default CartWidget