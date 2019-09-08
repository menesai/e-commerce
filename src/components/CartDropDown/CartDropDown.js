import React from 'react'
import './CartDropDown.scss'
import {Card, Image, Button, Transition} from 'semantic-ui-react';
import {connect} from 'react-redux';

const CartDropDown = ({hidden}) => {
    return (
        <div className='cdd'>
            <Transition visible={hidden} animation='slide down' duration={500}>
            <Card className='card-3'>
                <Card.Content>
                    <Card.Header>You have nothing in your cart...</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Image floated='left' size='tiny' src='https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/9a1ba9ec74724192b3dfa80f009c325f_9366/Ultraboost_Shoes_White_BB6168_01_standard.jpg'/>
                    <Card.Header>Adidas Ultra Boost</Card.Header> 
                    <Card.Meta textAlign='left'>$34.00</Card.Meta>
                    <Card.Meta>Qty: 0</Card.Meta>
                </Card.Content>
                <Card.Content>
                    <Image floated='left' size='tiny' src='https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/9a1ba9ec74724192b3dfa80f009c325f_9366/Ultraboost_Shoes_White_BB6168_01_standard.jpg'/>
                    <Card.Header>Adidas Ultra Boost</Card.Header> 
                    <Card.Meta textAlign='left'>$34.00</Card.Meta>
                    <Card.Meta>Qty: 0</Card.Meta>
                </Card.Content>
                <Card.Content>
                    <Image floated='left' size='tiny' src='https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/9a1ba9ec74724192b3dfa80f009c325f_9366/Ultraboost_Shoes_White_BB6168_01_standard.jpg'/>
                    <Card.Header>Adidas Ultra Boost</Card.Header> 
                    <Card.Meta textAlign='left'>$34.00</Card.Meta>
                    <Card.Meta>Qty: 0</Card.Meta>
                </Card.Content>
                <Card.Content>
                    <Image floated='left' size='tiny' src='https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/9a1ba9ec74724192b3dfa80f009c325f_9366/Ultraboost_Shoes_White_BB6168_01_standard.jpg'/>
                    <Card.Header>Adidas Ultra Boost</Card.Header> 
                    <Card.Meta textAlign='left'>$34.00</Card.Meta>
                    <Card.Meta>Qty: 0</Card.Meta>
                </Card.Content>
                <div className='chk-out'>
                <Button fluid>Go to Checkout</Button>
                </div>
            </Card>

            </Transition>

        </div>
    )
}

const mapStateToProps = ({ cart: {hidden}}) => ({
    hidden
})

export default connect(mapStateToProps)(CartDropDown)
