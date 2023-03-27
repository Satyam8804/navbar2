import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
         <nav>
        <div className="logo">Satyam</div>
        <input type="checkbox" name="" id="click"/>
        <label for="click" className="menu-btn">
            <i className="fas fa-bars"></i>
        </label>
        <ul>
           <li> <Link className="active" to="/"> Home</Link></li>
           <li><Link to="/about">About </Link> </li>
           <li> <Link to="/services"> Services</Link></li>
           <li><Link to="/gallery">Gallery </Link> </li>
           <li> <Link to="/feedback">Feedback </Link></li>
            
        </ul>
    </nav>
    </>
  )
}

export default NavBar