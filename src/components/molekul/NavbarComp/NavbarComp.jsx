import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

const NavbarComp = () => {

    const [toggle, setToggle] = useState(false);

    const toggleClick = () => {
        setToggle(true);
        console.log('berhasil')
    }

    const closeMenu = () => {
        setToggle(false)
    }


    return (
        <div className="NavComponent">
            <NavLink to={'/'} className="brand"><h1>Cinemas</h1></NavLink>
            <i id='navToggle' className="bi bi-grid" onClick={toggleClick}></i>
            <div className={toggle ? 'menu menu-active' : 'menu'}>
                <ul className="navlist">
                    <li className="navlink"><NavLink to={'/'}>Home</NavLink></li>
                    <li className="navlink"><NavLink to={'/about'}>About</NavLink></li>
                    <li className="navlink"><NavLink to={'/teather'}>Teather</NavLink></li>
                    <li className="navlink"><NavLink to={'/now-playing'}>Now Playing</NavLink></li>
                    <li className="navlink"><NavLink to={'/teather'}>Contact</NavLink></li>
                </ul>

                <i class="bi bi-x-circle" id='menu-close' onClick={closeMenu}></i>
                <ul className="kanan">
                    <li className="navlink">
                        <NavLink className={'register'} to={'/register'}>Register</NavLink>
                    </li>
                    <li className="navlink">

                        <NavLink className={'login'} to={'/login'}>Login</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarComp