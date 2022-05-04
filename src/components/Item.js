import React from 'react'
import { useNavigate } from 'react-router-dom'


// /producto/${props.producto.id}

function Item(props) {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/producto/${props.producto.id}`)
    }


    return (
        <div className='card'>
            <h6>{props.producto.nombre}</h6>
            <img src={props.producto.imagen} alt={props.producto.nombre}/>
            <p>${props.producto.precio}</p>
            <button onClick={handleClick}>Ver mas</button>
        </div>
    )
    
}

export default Item