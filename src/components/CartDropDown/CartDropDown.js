import React from 'react'
import './CartDropDown.scss'
import {Card, Image, Button, Transition} from 'semantic-ui-react';
import {connect} from 'react-redux';

const CartDropDown = ({hidden, cartItems, itemCount}) => {
    // console.log
    return (
        <div className='cdd'>
            <Transition visible={hidden} animation='slide down' duration={500}>
            <Card className='card-3'>
                <Card.Content header={!itemCount ? 'You have nothin in cart': `you have ${itemCount} item in cart `} textAlign='center'> 
                   
                </Card.Content>
                    {cartItems.map((el,i) =>{
                        return(
                            // <div className='itemInfo' key={i}>
                            <Card.Content key={i}>
                                <Image floated='left' size='tiny' src={el.imageUrl}/>
                                <Card.Header>{el.name}</Card.Header> 
                                <Card.Meta textAlign='left'>${el.price}</Card.Meta>
                                <Card.Meta>Qty: {el.quantity}</Card.Meta>
                            </Card.Content>
                            // </div>
                        )
                    })}
                <Card.Content extra>
                    {!itemCount? null : <Button fluid>Go to Checkout</Button>}
                </Card.Content>
            </Card>

            </Transition>

        </div>
    )
}

const mapStateToProps = ({ cart: {hidden}, cart:{cartItems}}) => ({
    hidden,
    cartItems,
})


export default connect(mapStateToProps)(CartDropDown)