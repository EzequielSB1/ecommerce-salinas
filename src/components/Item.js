import React from 'react'

function Item({producto}) {
    return (
        <div className='card'>
            <h6>{producto.nombre}</h6>
            <img src={producto.imagen} alt={producto.nombre}/>
            <p>${producto.precio}</p>
            <button>Ver mas</button>
        </div>
    )
}

export default Item