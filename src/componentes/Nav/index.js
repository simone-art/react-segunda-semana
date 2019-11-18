import React from 'react'
import Logo from '../../img/RocketChat.png'
import './style.css'
import Menu from './Menu'

function Nav() {
    return (
        <nav className='navbar'>
            <img 
            src={Logo}
            alt='Logotipo do Rocketchat'
            className='navbar-logo'
            />
            <Menu />
        </nav>
    )
}

export default Nav;