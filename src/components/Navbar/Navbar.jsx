import React from 'react';
import './Navbar.scss'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return <nav className='nav'>
        <div>
            
            <p>    
            <NavLink class='item' to='/profile'>Profile</NavLink>
            </p>
            <p>
            <NavLink class='item' to='/dialogs'>Messages</NavLink> 
            </p>
            <p>
            <NavLink class='item' to='/news'>News</NavLink>    
            </p>        <p>
                Music
            </p>
            <p>
                Settings
            </p></div>
    </nav>

}

export default Navbar;