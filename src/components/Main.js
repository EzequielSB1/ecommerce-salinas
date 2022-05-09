// imports
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartWidget from './CartWidget'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'

// component
const Main = () => {

  return (
    <main>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        {/* <Route path='/contacto' element={} /> */}
        <Route path='/:nombreCategoria' element={<ItemListContainer/>}/>
        <Route path='/producto/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartWidget/>} />
      </Routes>

    </main>
  )
}

// export
export default Main
