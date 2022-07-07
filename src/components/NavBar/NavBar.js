import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Icons/github.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/favs" className='nav-link'>Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}