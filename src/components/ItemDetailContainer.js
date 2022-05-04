import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import productosIniciales from './productos.json'

const ItemDetailContainer = () => {
    let [cargando,setCargando] = useState(true)
    let [producto,setProducto] = useState({}) 
    let {id} = useParams()
  
    useEffect(()=>{
  
      const productosFiltrados = productosIniciales.filter(x => x.id === id)

      const pedidoFiltrado = new Promise((res)=>{
        setTimeout(()=>{
          res(productosFiltrados)
        }, 2000)
      })
      
      pedidoFiltrado.then(()=>{
        console.log("Termino de cargar bien")
        setCargando(false)
        setProducto(productosFiltrados)
      })

      pedidoFiltrado.catch(()=>{
        console.log("Carga fallida, recargue la pagina")
      })
  
    },[id])


    if (cargando) {
        return(
          <p>Cargando...</p>
        )
      } else {
        return(
          <section className='details'>
            <ItemDetail producto={producto} key={productosIniciales.id} imagen={productosIniciales.imagen} nombre={productosIniciales.nombre} descripcion={productosIniciales.descripcion} counter={productosIniciales.counter} stock={productosIniciales.stock} />
          </section>
        )
      }
}

export default ItemDetailContainer