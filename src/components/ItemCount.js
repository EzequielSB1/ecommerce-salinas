import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ItemCount = ({init, stock, onAdd, precio, nombre}) => {

    const [counter, setCounter] = useState(init)
    const [confirm, setConfirm] = useState(false)

    const add = () => {
        if (counter < stock) {
            setCounter(counter+1)
        }
    }

    const remove = () => {
        if (counter > 0) {
            setCounter(counter-1)
        }
    }

    const navigate = useNavigate()
    
    const buttonConfirm = () => {
        console.log(`se compraron ${counter} ${nombre}`)
        onAdd(counter)
        setConfirm(true)
        navigate(`/cart`)
    }

    return (
        <div className='cart'>
            <div>
                <div className='cart__text'>
                    <p className='cart__precio'>Precio: {precio}</p>
                    <p className='cart__stock'>Stock: {stock}</p>
                </div>
                <div>
                    <button onClick={remove} className='cart__button-remove material-icons'>remove</button>
                    <p className='cart__counter'>{counter}</p>
                    <button onClick={add} className='cart__button-add material-icons'>add</button>
                </div> 
                <button onClick={buttonConfirm} className='cart__buttonAddCar material-icons'>add_shopping_cart</button>           
            </div>
        </div>
    )
}

export default ItemCount