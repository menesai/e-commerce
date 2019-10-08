import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const Stripe = ({price}) => {
    const priceForStripe = price * 100;
    const pubKey = 'pk_test_1wJf74tW6RWuOHfZ1Wd24SPT00ExhAT5l9'

    const onToken = (token) => {
        console.log(token)
        alert('Payment successful!')
    }

    return (
        <StripeCheckout
            name='Allwear'
            description='Selling sizzling clothes'
            billingAddress
            shippingAddress
            description={`your total is $${price}.00`}
            panelLabel='Pay Now'
            stripeKey={pubKey}
            token={onToken}
            zipCode
            amount={priceForStripe}
        />
    )
}

export default Stripe
