import React from 'react'
import './CartDropDown.scss'
import {Card, Button, Transition, Item, Divider} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom';
import {toggleCart} from '../../redux/cart/cartReducer'

const CartDropDown = ({hidden, cartItems, itemCount, history,dispatch}) => {
    return (
        <div className='cdd' >
            <Transition visible={hidden} animation='slide down' duration={500}>
            <Card fluid className='card-3'>
                    <p className='cdd-title'>{!itemCount ? 'Your cart is empty...': `You have ${itemCount} items in your cart `}</p>
                    <Divider></Divider>
                    {cartItems.map((el,i) =>{
                        return(
                            <div style={{paddingLeft: 10}} key={i}>
                           <Item.Group unstackable relaxed>
                            <Item>
                                <Item.Image size='tiny' src={el.imageUrl}/>
                                <Item.Content>
                                    <Item.Header>{el.name}</Item.Header>
                                    <Item.Extra>${el.price}</Item.Extra>
                                    <Item.Extra>Qty: {el.quantity}</Item.Extra>
                                </Item.Content>
                            </Item>
                                <Divider></Divider>
                           </Item.Group> 
                            </div>
                        )
                    })}
                    <div className='chk-btn'>
                <Item.Group relaxed>
                    <Item>
                    {!itemCount? null : <Button onClick={() =>{
                        history.push('/checkout')
                        dispatch(toggleCart())
                    }} fluid>Go to Checkout</Button>}
                    </Item>
                </Item.Group>
                    </div>
            </Card>

            </Transition>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    cartItems: selectCartItems,
})


export default withRouter(connect(mapStateToProps)(CartDropDown))