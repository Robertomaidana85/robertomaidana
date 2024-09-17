import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <header>
      
      <Link to="/">
      <img className="perro" src= {"./img/perro.jpg"} alt='Logo'/>
      </Link>

        <h1>Patitas Petshop Online</h1>
        <nav>
            <ul>
                <li>
                <NavLink to="/categoria/cuchas"> Cuchas </NavLink>
                </li>
                <li>
                <NavLink to="/categoria/correas"> Correas y arnés </NavLink> 
                </li>
                <li>
                <NavLink to="/categoria/platos"> Platos y bebederos </NavLink> 
                  </li>
                <li>
                <NavLink to="/categoria/juguetes">  Juguetes </NavLink> 
                  </li>
            </ul>
        </nav>
        
        <CartWidget/>
    </header>
  )
}

export default NavBar