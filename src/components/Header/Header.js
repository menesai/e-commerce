import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react';
import {auth} from '../../firebase';
import {connect} from 'react-redux';
// import {get}

const Header = ({currentUser}) => {
    return (
        <div className='main-header'>

            <div className='logo-container1'> <Link className='logo-container' to='/'><Icon name='shopping bag' color='grey' size='big'/> HOME</Link></div>

            <div className='options'>
                <Link className='option' to='/shop'> SHOP</Link>
            </div>
            {
                currentUser?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>:
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <div className='options'>
                <Link className='option' to='#'>LINK</Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
