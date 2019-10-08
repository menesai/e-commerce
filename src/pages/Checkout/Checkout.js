import React from 'react'
import './Checkout.scss'
import {Table} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, cartItemTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/Checkout-Item/CheckoutItem';
import Stripe from '../../components/Stripe/Stripe'

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
             <div className='Cdiv'>
                 <h3>Total: ${cartTotal}.00</h3>
                 <Stripe price={cartTotal}/>
             </div>
           </div>
           <div className='card-info'>
               <div className='card-det'>
               <p>* TEST CREDIT CAR FOR PAYMENTS *</p>
               <p>CARD NUMBER: 4242424242424242</p>
               <p>EXP. DATE: 01/20</p>
               <p>CVV: 123</p>
               </div>
           </div>
        </div>
    )
}

 const mapStateToProps = createStructuredSelector({
     cartItems: selectCartItems,
     cartTotal: cartItemTotal
 })

export default connect(mapStateToProps)(Checkout)

