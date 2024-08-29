import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    
    <header>
        <h1>Patitas Petshop Online</h1>
        <nav>
            <ul>
                <li>Cuchas</li>
                <li>Correas y arnés</li>
                <li>Platos y bebederos</li>
                <li>Juguetes</li>
            </ul>
        </nav>
        
        <CartWidget/>
    </header>
  )
}

export default NavBar