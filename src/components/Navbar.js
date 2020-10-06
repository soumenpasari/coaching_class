import React from 'react';

import logo_image from '../img/logo_white.png';

export const Navbar = () => {
    return (
        <nav className='navbar is-black'>
            <div className='container'>
                <a href='/' className='navbar-brand'>
                    <span className='navbar-item'>
                        <img src={logo_image} alt='Logo' />
                    </span>
                </a>
                <div className='navbar-menu'>
                    <div className='navbar-start'>
                        <a href='/' className='navbar-item'>
                            About us
                        </a>
                        <a href='/' className='navbar-item'>
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
