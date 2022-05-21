import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import productosIniciales from './productos.json'
import { db } from './firebase'
import { collection, addDoc, getDoc, doc, getDocs, query, where } from 'firebase/firestore'


const ItemDetailContainer = () => {
    let [cargando,setCargando] = useState(true)
    let [producto,setProducto] = useState({}) 
    let {id} = useParams()
  


    useEffect(() => {

      setCargando(true)
  
      const productosCollection = collection( db, "productos" )
      const resultadoDelDoc = doc(productosCollection, id)
      const consulta = getDoc(resultadoDelDoc)
  
      consulta.then((resultado)=>{

        setProducto(resultado.data())
        setCargando(false)
  
        })
        consulta.catch((error)=>{
          console.log(error)

        })
        consulta.finally(()=>{
  
        })
    // useEffect(()=>{

    //   console.log({id})
  
    //   const resultado = productosIniciales.filter((producto)=>{
    //     return producto.id == id
    //   })[0]

    //   console.log(resultado)

    //   const pedido = new Promise((res)=>{
    //     setTimeout(()=>{
    //       res(resultado)
    //     }, 300)
    //   })
      
    //   pedido.then(()=>{
    //     console.log("Termino de cargar bien")
    //     setCargando(false)
    //     setProducto(resultado)
    //   })

    //   pedido.catch(()=>{
    //     console.log("Carga fallida, recargue la pagina")
    //   })
  
    // },[id])


    // if (cargando) {
    //   return(
    //     <div className='container__carga'>
    //       <div className='carga'></div>
    //     </div>
    //   )
    // } else {
    //   return(
    //     <section className='details'>
    //       <ItemDetail  producto={producto} 
    //       key={productosIniciales.id} imagen={productosIniciales.imagen} nombre={productosIniciales.nombre} descripcion={productosIniciales.descripcion} counter={productosIniciales.counter} stock={productosIniciales.stock}
    //       />
    //     </section>
    //   )
    // }

    setCargando(false)

      })

    return (
      <>
        {cargando ? <div className='container__carga'><div className='carga'></div></div> : <section className='details'><ItemDetail key={producto.id} producto={producto} imagen={producto.imagen} nombre={producto.title} descripcion={producto.descripcion} counter={producto.counter} stock={producto.stock}/></section>}
      </>
    )
}

export default ItemDetailContainer


