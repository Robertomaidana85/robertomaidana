import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './ItemDetail/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


const App = () => {


  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Mis productos."/>
    <ItemDetailContainer/>
    </>
  )
}

export default App