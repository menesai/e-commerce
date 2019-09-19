import React from 'react'
import './Checkout.scss'
import {Table, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'

const Checkout = ({cartItems}) => {
    console.log(cartItems)
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
                    <Table.Row key={i}>
                        <Table.Cell>
                            <img style={{height:50, objectFit: 'contain'}} src={el.imageUrl} alt='item'/>
                        </Table.Cell>
                        <Table.Cell >{el.name}</Table.Cell>
                        <Table.Cell>
                            <Icon name='angle left' size='large' link fitted/>
                                 {' '} {el.quantity} {' '}
                            <Icon name='angle right' size='large' link fitted/>
                        </Table.Cell>
                        <Table.Cell>${el.price}.00</Table.Cell>
                        <Table.Cell selectable icon='trash'></Table.Cell>
                    </Table.Row>        
                ))}
               </Table.Body>
           </Table>
           <div className='chk-out-footer'>
             <h3>Total: $34.00</h3>
           </div>
        </div>
    )
}

 const mapStateToProps = createStructuredSelector({
     cartItems: selectCartItems

 })

export default connect(mapStateToProps)(Checkout)

