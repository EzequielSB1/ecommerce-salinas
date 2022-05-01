import React from 'react'
import ItemCount from './ItemCount'

function Item(props) {
    if (props.details) {
        return(
            <div className='cardDetails'>
                <h6>{props.producto.nombre}</h6>
                <img src={props.producto.imagen} alt={props.producto.nombre}/>                
                <p>{props.producto.descripcion}</p>
                <ItemCount stock={props.producto.stock} init={props.producto.counter} />
            </div>
        )
    } else {
        return (
            <div className='card'>
                <h6>{props.producto.nombre}</h6>
                <img src={props.producto.imagen} alt={props.producto.nombre}/>
                <p>${props.producto.precio}</p>
                <button>Ver mas</button>
            </div>
        )
    }
}

export default Item