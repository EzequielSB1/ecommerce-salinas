// imports
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import productosIniciales from './productos.json'

// component
const ItemListContainer = () => {

  let [cargando,setCargando] = useState(true)
  let [productos,setProductos] = useState([]) 
  let {nombreCategoria} = useParams()

  useEffect(()=>{

    if (nombreCategoria === undefined) {

      const pedido = new Promise((res)=>{
        setTimeout(()=>{
          res(productosIniciales)
        }, 1500)
      })

      pedido.then(()=>{
        console.log("Termino de cargar bien")
        setCargando(false)
        setProductos(productosIniciales)
      })

      pedido.catch(()=>{
        console.log("Carga fallida, recargue la pagina")
      })

    } else {

      const productosFiltrados = productosIniciales.filter(x => x.categoria === nombreCategoria)

      const pedidoFiltrado = new Promise((res)=>{
        setTimeout(()=>{
          res(productosFiltrados)
        }, 2000)
      })
      
      pedidoFiltrado.then(()=>{
        console.log("Termino de cargar bien")
        setCargando(false)
        setProductos(productosFiltrados)
      })

      pedidoFiltrado.catch(()=>{
        console.log("Carga fallida, recargue la pagina")
      })

    }

    },[nombreCategoria])

  
  if (cargando) {
    return(
      <div className='container__carga'>
        <div className='carga'></div>
      </div>
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