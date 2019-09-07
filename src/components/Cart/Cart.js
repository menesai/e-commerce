import React from 'react'
import {Icon, Label} from 'semantic-ui-react';

const Cart = () => {
    return (
        <Label color='black' size='small' as='a'>
            <Icon size='large' name='cart'/>
            <Label color='red' size='small' circular>0</Label>
        </Label>
    )
}

export default Cart
