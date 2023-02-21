import './navbar.css';
import { NavbarElements } from './NavbarElements';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [menu, setMenu] = useState(true);

  const iconClick = () => 
  {
    setMenu(!menu);
  }
  return (
    <div className='navbar'>
        <h2 className='logo'>Travelsite</h2>
        <i onClick={iconClick} className={menu ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
        <ul onClick={iconClick} className={menu ? "navbar-items" : "navbar-items active"}>
        {NavbarElements.map((value, index) => {
            return (
            <li key={index}>
                <Link className={value.className} to={value.url}>
                   <i className={value.icon}></i>{value.title}
                </Link>
            </li>
            );
        })}
        </ul>
    </div>
  )
}

export default Navbar

