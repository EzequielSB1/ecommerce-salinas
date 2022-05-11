import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ItemCount = ({init, stock, onAdd, precio, nombre, onCount}) => {

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

    const confirmar = () => {
        onAdd(counter);
        console.log(counter);
        setConfirm(true);
    };


    if (!confirmar) {
        return (
        <div>
            <div className="cart">
            <button onClick={add} className="material-icons">
                add
            </button>
            <p className="cantidad">Unidades a comprar : {counter}</p>
            <button onClick={remove} className="material-icons">
                remove
            </button>
            </div>
            <button onClick={confirmar} className="botonSuma">
            Confirmar
            </button>
        </div>
        );
    } else {
        return (
        <div className='cart'>
            <div>
            <button onClick={add} className="material-icons">
                add
            </button>
            <p className="cart__counter">{counter}</p>
            <button onClick={remove} className="material-icons">
                remove
            </button>
            </div>
            <button onClick={confirmar} className="botonSuma">
                Confirmar
            </button>
        </div>
        );
    }
}

export default ItemCount