import React from 'react'
import Logo from '../../img/RocketChat.png'
import './style.css'

function Nav() {
    return (
        <nav className='navbar'>
            <img 
            src={Logo}
            alt='Logotipo do Rocketchat'
            className='navbar-logo'
            />
        </nav>
    )
}

export default Nav;