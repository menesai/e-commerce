import React from 'react'
import { connect } from 'react-redux';
import {clearItem, adjustItem, addItem} from '../../redux/cart/cartReducer'
import {Table, Icon} from 'semantic-ui-react'

const CheckoutItem = ({cartItem, removeItem, adjustItem, addItem}) => {
    const {name, imageUrl, price, quantity} =cartItem
    return (
        // <div style={{height: 150}}>
        <Table.Row>
        <Table.Cell>
            <img style={{height:50, objectFit: 'contain'}} src={imageUrl} alt='item'/>
        </Table.Cell>
        <Table.Cell >{name}</Table.Cell>
        <Table.Cell>
            <Icon name='angle left' size='large' link fitted onClick={() => adjustItem(cartItem)}/>
                 {' '} {quantity} {' '}
            <Icon name='angle right' size='large' link fitted onClick={() => addItem(cartItem)}/>
        </Table.Cell>
        <Table.Cell>${price}.00</Table.Cell>
        <Table.Cell onClick={() => removeItem(cartItem)} selectable icon='trash'></Table.Cell>
    </Table.Row> 
        // </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(clearItem(item)),
    adjustItem: item => dispatch(adjustItem(item)),
    addItem: item => dispatch(addItem(item))
 })

export default connect(null, mapDispatchToProps)(CheckoutItem)
