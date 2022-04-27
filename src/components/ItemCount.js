import React, { useState } from 'react'

const ItemCount = ({init, stock, onAdd}) => {

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
    
    const buttonConfirm = () => {
        console.log(counter)
        onAdd(counter)
        setConfirm(true)
    }

    return (
        <div className='cart'>
            <h6 className='cart__title'>Cart product</h6>
            <div>
                <div>
                    <button onClick={remove} className='cart__button material-icons'>remove</button>
                    <p className='cart__counter'>{counter}</p>
                    <button onClick={add} className='cart__button material-icons'>add</button>
                </div> 
                <button onClick={buttonConfirm} className='cart__buttonAddCar material-icons'>add_shopping_cart</button>           
            </div>
        </div>
    )
}

export default ItemCount