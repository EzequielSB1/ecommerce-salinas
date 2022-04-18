// imports
import React from 'react'
import ItemListContainer from './ItemListContainer'

// component
const Main = () => {
  
  const filtros = true

  return (
    <main>
      <ItemListContainer filtros={filtros}/>
      <ItemListContainer/>
    </main>
  )
}

// export
export default Main
