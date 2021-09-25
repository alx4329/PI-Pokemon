import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/pokemon.png'

import './Navbar.css';

export function Navbar() {
    return (
        <header className="navbar">
            <img id="logoGames" src={Logo} width="40" height="40" alt="" />
            <nav>
                <div className="list">
                    <li className="list-item">
                        <NavLink exact to="/create" >Create</NavLink>
                        
                    </li>
                    <li className="list-item">
                    <NavLink exact to="/videogames" >Home</NavLink>
                    
                    </li>
                </div>
            </nav>
        </header>
    )
}