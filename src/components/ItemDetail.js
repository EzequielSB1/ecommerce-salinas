// import React from 'react'
// import ItemCount from './ItemCount'

// const ItemDetail = (props) => {

//   return (
//     <div className='cardDetails'>
//       <h6>{props.nombre}</h6>
//       <img src={props.imagen} alt={props.nombre}/>                
//       <p>{props.descripcion}</p>
//       <ItemCount stock={props.stock} init={props.counter} />
//     </div>
//   )
// }

// export default ItemDetail


import React from 'react'

import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

  console.log("hola",producto)

  return (

    <div className='cardDetails'>

<h6>{producto.nombre}</h6>

<img src={producto.imagen} alt={producto.nombre}/>

<p>{producto.descripcion}</p>

<ItemCount stock={producto.stock} init={producto.counter} />

</div>

  )

}

export default ItemDetail