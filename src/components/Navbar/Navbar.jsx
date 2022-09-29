import React from 'react';
import './Navbar.scss'
import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav className='nav'>
        <div>
            
            <p>    
            <Link to='/profile'>Profile</Link>
            </p>
            <p>
            <Link to='/dialogs'>Messages</Link> 
            </p>
            <p>
            <Link to='/news'>News</Link>    
            </p>        <p>
                Music
            </p>
            <p>
                Settings
            </p></div>
    </nav>

}

export default Navbar;