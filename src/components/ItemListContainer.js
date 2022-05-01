// imports
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import productosIniciales from './productos.json'

// component
const ItemListContainer = () => {

  let [cargando,setCargando] = useState(true)
  let [productos,setProductos] = useState([]) 

  useEffect(()=>{

    const pedido = new Promise((res)=>{
      setTimeout(()=>{
        res(productosIniciales)
      }, 2000)
    })

    pedido.then(()=>{
      console.log("Termino de cargar bien")
      setCargando(false)
      setProductos(productosIniciales)
    })

    pedido.catch(()=>{
      console.log("Carga fallida, recargue la pagina")
    })

  },[])

  
  if (cargando) {
    return(
      <p>Cargando...</p>
    )
  } else {
    return(
      <section className='products'>
        <ItemList productos={productos}/>
      </section>
    )
  }

  // return( 
  //   <p>Cargando...</p> ? (
  //   <section className='products'>  
  //     <ItemList productos={productos}/> 
  //   </section>)
  // )
  
}

// exports
export default ItemListContainer