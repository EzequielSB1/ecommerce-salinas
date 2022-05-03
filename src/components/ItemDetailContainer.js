import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import productosIniciales from './productos.json'

const ItemDetailContainer = () => {
    let [cargando,setCargando] = useState(true)
    let [productos,setProductos] = useState({}) 
  
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
            <section className='details'>
            <ItemDetail key={productosIniciales[0].id} imagen={productosIniciales[0].imagen} nombre={productosIniciales[0].nombre} descripcion={productosIniciales[0].descripcion} counter={productosIniciales[0].counter} stock={productosIniciales[0].stock} />
          </section>
        )
      }
}

export default ItemDetailContainer