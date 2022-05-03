import React from 'react'

function Item(props) {
    return (
        <div className='card'>
            <h6>{props.producto.nombre}</h6>
            <img src={props.producto.imagen} alt={props.producto.nombre}/>
            <p>${props.producto.precio}</p>
            <button>Ver mas</button>
        </div>
    )
    
}

export default Item