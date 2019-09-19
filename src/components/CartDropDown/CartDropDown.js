import React from 'react'
import './CartDropDown.scss'
import {Card, Image, Button, Transition} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom';
import {toggleCart} from '../../redux/cart/cartReducer'

const CartDropDown = ({hidden, cartItems, itemCount, history,dispatch}) => {
    return (
        <div className='cdd'>
            <Transition visible={hidden} animation='slide down' duration={500}>
            <Card className='card-3'>
                <Card.Content header={!itemCount ? 'Your cart is empty...': `you have ${itemCount} item in cart `} textAlign='center'/>
                    {cartItems.map((el,i) =>{
                        return(
                            <Card.Content key={i}>
                                <Image floated='left' size='tiny' src={el.imageUrl}/>
                                <Card.Header>{el.name}</Card.Header> 
                                <Card.Meta textAlign='left'>${el.price}</Card.Meta>
                                <Card.Meta>Qty: {el.quantity}</Card.Meta>
                            </Card.Content>
                        )
                    })}
                <Card.Content extra>
                    {!itemCount? null : <Button onClick={() =>{
                        history.push('/checkout')
                        dispatch(toggleCart())
                    }} fluid>Go to Checkout</Button>}
                </Card.Content>
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