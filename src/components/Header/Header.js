import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react';

const Header = () => {
    return (
        <div className='main-header'>

            <div className='logo-container1'> <Link className='logo-container' to='/'><Icon name='shopping bag' color='grey' size='big'/> HOME</Link></div>

            <div className='options'>
                <Link className='option' to='/shop'> SHOP</Link>
            </div>
            <div className='options'>
                <Link className='option' to='/signin' >SIGN IN</Link>
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
