import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react';
import {auth} from '../../firebase';
import {connect} from 'react-redux';
import Cart from '../Cart/Cart';
import CartDropDown from '../CartDropDown/CartDropDown';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/users/user.selector';
import {createStructuredSelector} from 'reselect'

const Header = ({currentUser, itemCount}) => {
    return (
        <div className='main-header'>

            <div className='logo-container1'> <Link className='logo-container' to='/'><Icon name='shopping bag' color='grey' size='big'/>Allwear</Link></div>

            <div className='options'>
                <Link className='option' to='/shop'> SHOP</Link>
            </div>
            {
                currentUser?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>:
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <div className='options'>
                <Cart
                itemCount={itemCount}
                />
            </div>
            <CartDropDown
            itemCount={itemCount}
            />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(Header)
