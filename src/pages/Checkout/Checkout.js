import React from 'react'
import './Checkout.scss'
import {Table} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, cartItemTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/Checkout-Item/CheckoutItem'

const Checkout = ({cartItems, cartTotal}) => {
    // console.log(cartItems)
    return (
        <div className='checkout'>
           <Table  textAlign='center' unstackable  className='tb' >
               <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Product</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Qty.</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
               </Table.Header>

               <Table.Body>
                   {cartItems.map((el, i) =>(
                    <CheckoutItem key={el.id} cartItem={el}/>      
                ))}
               </Table.Body>
           </Table>
           <div className='chk-out-footer'>
             <h3>Total: ${cartTotal}.00</h3>
           </div>
        </div>
    )
}

 const mapStateToProps = createStructuredSelector({
     cartItems: selectCartItems,
     cartTotal: cartItemTotal
 })

export default connect(mapStateToProps)(Checkout)

