import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='main-header'>
            <div className='logo-container1'> <Link className='logo-container' to='/'>HOME</Link></div>

            <div className='options'>
                <Link className='option' to='/shop'> SHOP</Link>
            </div>
            <div className='options'>
                <Link className='option' to='#' >LINK</Link>
            </div>
            <div className='options'>
                <Link className='option' to='#'>LINK</Link>
            </div>
            <div className='options'>
                <Link className='option' to='#'>LINK</Link>
            </div>
        </div>
    )
}

export default Header
