// imports
import React from 'react'
import ItemListContainer from './ItemListContainer'

// component
const Main = () => {

  return (
    <main>
      <ItemListContainer filters={true}/>
      <ItemListContainer/>
    </main>
  )
}

// export
export default Main
