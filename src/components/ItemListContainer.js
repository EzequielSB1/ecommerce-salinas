// imports
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import productosIniciales from './productos.json'
import { db } from './firebase'
import { collection, addDoc, getDoc, doc, getDocs, query, where } from 'firebase/firestore'

// component
const ItemListContainer = () => {

  let [cargando,setCargando] = useState(true)
  let [productos,setProductos] = useState([]) 
  let {nombreCategoria, test} = useParams()

  useEffect(()=>{

    setCargando(true)

    const productosCollection = collection( db, "productos" )
    // const consulta = getDocs(queryFiltros)


    if (nombreCategoria !== undefined) {

      
      const queryFiltros = query(productosCollection,where("categoria", "==", nombreCategoria))

      const consulta = getDocs(queryFiltros)

    consulta.then((resultado)=>{
        const productos = resultado.docs.map(doc => {
          const productosConId = doc.data()
          productosConId.id = doc.id

          return productosConId
        })

        // console.log(productos)
        setProductos(productos)
        setCargando(false)

      })

      

      consulta.catch((error)=>{

        console.log(error)

      })
      consulta.finally(()=>{

      })

    } else {

      const consulta = getDocs(productosCollection)

      consulta.then((resultado)=>{
          const productos = resultado.docs.map(doc => {
            const productosConId = doc.data()
            productosConId.id = doc.id

            return productosConId
          })

          // console.log(productos)
          setProductos(productos)
          setCargando(false)

        })

      

      consulta.catch((error)=>{

        console.log(error)

      })
      consulta.finally(()=>{

      })

    }

  //   if (nombreCategoria === undefined) {

  //     const pedido = new Promise((res)=>{
  //       setTimeout(()=>{
  //         res(productosConId)
  //       }, 1500)
  //     })

  //     pedido.then(()=>{
  //       console.log("Termino de cargar bien")
  //       setCargando(false)
  //       setProductos(productosConId)
  //     })

  //     pedido.catch(()=>{
  //       
  //     })

  //   } else {

  //     const productosFiltrados = productosIniciales.filter(x => x.categoria === nombreCategoria)

  //     const pedidoFiltrado = new Promise((res)=>{
  //       setTimeout(()=>{
  //         res(productosFiltrados)
  //       }, 2000)
  //     })
      
  //     pedidoFiltrado.then(()=>{
  //       console.log("Termino de cargar bien")
  //       setCargando(false)
  //       setProductos(productosFiltrados)
  //     })

  //     pedidoFiltrado.catch(()=>{
  //       console.log("Carga fallida, recargue la pagina")
  //     })

  //   }

  //   },[nombreCategoria])

  
  // if (cargando) {
  //   return(
  //     <div className='container__carga'>
  //       <div className='carga'></div>
  //     </div>
  //   )
  // } else {
  //   return(
  //     <section className='products'>
  //       <ItemList productos={productos}/>
  //     </section>
  //   )
  // })

  console.log(productos)
  setCargando(false)

})

  return (
    <>
      {cargando ? <div className='container__carga'><div className='carga'></div></div> : <section className='products'><ItemList productos={productos}/> </section>}
    </>
  )
  
  

}

// exports
export default ItemListContainer