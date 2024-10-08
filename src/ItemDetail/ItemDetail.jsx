import React from "react";
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
    
    return (
        <div className= "contenedorItem">
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <img src={img} alt={nombre} />
            <p>Lorem ipsum dolor sit amet consectetur s libero aspernatur quam nemo.</p>
        </div>
    )
}

export default ItemDetail

