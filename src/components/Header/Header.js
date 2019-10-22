import React, {Component} from 'react';
import './Header.scss';
import {withRouter, Link} from 'react-router-dom'
import {auth} from '../../firebase';
import {connect} from 'react-redux';
import Cart from '../Cart/Cart';
import {Icon, Sidebar, Menu} from 'semantic-ui-react'
import CartDropDown from '../CartDropDown/CartDropDown';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/users/user.selector';
import {createStructuredSelector} from 'reselect'


class Header extends Component{
    state={
        slide: false
    }

    handleSlide = () => this.setState({slide: !this.state.slide})
    handleSlideOut = () => this.setState({slide: false})


    render(){
        // console.log(this.state.slide)
        const {currentUser, itemCount, history} = this.props
        return (
            <div className='main-header'>
                <div className='ham' >
                    <Icon onClick={this.handleSlide} name='bars' size='large'/>
                    <Sidebar as={Menu} animation='overlay' visible={this.state.slide} vertical inverted onHide={this.handleSlideOut} width='wide'>
                            <div className='h-items'  onClick={this.handleSlideOut}>
                            <Menu.Item as='a' onClick={() => history.push('/')}>Home</Menu.Item>
                            <Menu.Item as='a' onClick={() => history.push('/signin')}>Sign Up</Menu.Item>
                            <Menu.Item as='a' onClick={() => history.push('/register')}>Register</Menu.Item>
                            <Menu.Item as='a' onClick={() => history.push('/shop/mens')}>Mens</Menu.Item>
                            <Menu.Item as='a' onClick={() => history.push('/shop/womens')}>Womens</Menu.Item>
                            <Menu.Item as='a' onClick={() => history.push('/shop/jackets')}>Jackets</Menu.Item>
                            <Menu.Item as='a' onClick={() => history.push('/shop/sneakers')}>Shoes</Menu.Item>
                            <Menu.Item as='a' onClick={() => history.push('/shop/hats')}>Hats</Menu.Item>
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

}
// }

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    itemCount: selectCartItemsCount
})

export default withRouter(connect(mapStateToProps)(Header))
