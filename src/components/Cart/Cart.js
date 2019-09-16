import React from 'react'
import {Icon, Label} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {toggleCart} from '../../redux/cart/cartReducer';

const Cart = ({toggleCart, itemCount}) => {
    return (
        <Label color='black' size='small' as='a' onClick={toggleCart}>
            <Icon size='large' name='cart'/>
            <Label color='red' size='small' circular>{itemCount}</Label>
        </Label>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatchToProps)(Cart);