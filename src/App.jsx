import { useState } from 'react'
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import Titulo from "./Components/Titulo/Titulo"
import IconoCarrito from './Components/IconoCarrito/IconoCarrito'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <Titulo/>
      <IconoCarrito/>
      <NavBar/>
      <ItemListContainer mensaje="Proximamente..."/>
    </>
  )
}

export default App
