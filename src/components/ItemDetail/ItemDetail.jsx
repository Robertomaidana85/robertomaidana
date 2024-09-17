import React from "react"
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, nombre, precio, img, stock}) => {
    
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados:" + cantidad)
      }

    return (
        <div className= "contenedorItem">
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <img src={img} alt={nombre} />
            <p>Lorem ipsum doljjor sit amet consectetur s libero aspernatur quam nemo.</p>

            {  agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
        </div>
    )
}

export default ItemDetail

