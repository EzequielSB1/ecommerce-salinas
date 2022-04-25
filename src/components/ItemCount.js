import React, { useState } from 'react'

const ItemCount = ({init, stock, onAdd}) => {

    const [counter, setCounter] = useState(init)
    const [confirm, setConfirm] = useState(false)

    const add = () => {
        if (counter < stock) {
            setCounter(counter+1)
        } else {
            
        }
    }

    const remove = () => {
        if (counter > 0) {
            setCounter(counter-1)
        } else {
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
                    <button onClick={add} className='cart__button material-icons'>add</button>
                    <p className='cart__counter'>{counter}</p>
                    <button onClick={remove} className='cart__button material-icons'>remove</button>
                </div> 
                <button onClick={buttonConfirm} className='cart__buttonAddCar material-icons'>add_shopping_cart</button>           
            </div>
        </div>
    )
}

export default ItemCount