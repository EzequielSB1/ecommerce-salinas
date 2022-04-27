// imports
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const productosIniciales = [
  {
    id : 1,
    nombre : "Ventana",
    precio : 1500,
    imagen : "https://http2.mlstatic.com/D_NQ_NP_670358-MLA42826612796_072020-V.webp"
  },
  {
    id : 2,
    nombre : "Puerta",
    precio : 2500,
    imagen : "https://http2.mlstatic.com/D_NQ_NP_961661-MLA43990468486_112020-V.webp"
  },
  {
    id : 3,
    nombre : "Puerta ventana",
    precio : 3500,
    imagen : "https://http2.mlstatic.com/D_NQ_NP_972699-MLA31935917273_082019-V.webp"
  },
  {
    id : 4,
    nombre : "Bacha",
    precio : 500,
    imagen : "https://http2.mlstatic.com/D_NQ_NP_6https://http2.mlstatic.com/D_NQ_NP_719146-MLA46496058379_062021-V.webp70358-MLA42826612796_072020-V.webp"
  }
]

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
  
}

// exports
export default ItemListContainer