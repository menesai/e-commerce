import React from 'react';
import './Header.scss';
import {withRouter, Link} from 'react-router-dom'
import {auth} from '../../firebase';
import {connect} from 'react-redux';
import Cart from '../Cart/Cart';
import {Icon, Sidebar, Segment} from 'semantic-ui-react'
import CartDropDown from '../CartDropDown/CartDropDown';
import {selectCartItemsCount, selectSideBar} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/users/user.selector';
import {createStructuredSelector} from 'reselect'

const Header = ({currentUser, itemCount, history, sideBar}) => {
    console.log(sideBar)
    return (
        <div className='main-header'>
            <div className='ham' >
                <Icon onClick={sideBar} name='bars' size='large'/>
                <Sidebar as={Segment} animation='overlay' width='thin' visible={sideBar}>
                    <div style={{backgroundColor: 'black', width: 30}}>
                    <p style={{color: 'white'}}>hello</p>
                    </div>
                </Sidebar>
            </div>

            <div className='logo-container1'> 
            <h3 className='H-name' onClick={ () => history.push('/')}> Allwear</h3>
            </div>

            <div className='options'>
                <Link className='option' to='/shop'> SHOP</Link>
            </div>
            {
                currentUser
                ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <div className='options-cart'>
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
    sideBar: selectSideBar,
    currentUser: selectCurrentUser,
    itemCount: selectCartItemsCount
})

export default withRouter(connect(mapStateToProps)(Header))
