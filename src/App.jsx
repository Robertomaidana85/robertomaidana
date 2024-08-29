import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'


const App = () => {


  return (
    <>
    <NavBar/>
    <ItemListConteiner greeting="Mis productos."/>
    </>
  )
}

export default App