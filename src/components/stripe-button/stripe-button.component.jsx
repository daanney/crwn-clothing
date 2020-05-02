import React from 'react'

import './stripe-button.styles.scss'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({ price })=> {
    const priceforStripe = price * 100
    const pkey = 'pk_test_5hPYl9hgbJ5X7t8oLDY8n01z00YxwUD2Od'

    const onToken =(token)=> {
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout billingAddress shippingAddress label='Pay Now' name='CRWN Clothing Shop' image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`} amount={priceforStripe} panelLabel='Pay Now yo' token={onToken} stripeKey={pkey} />
    )
}

export default StripeCheckoutButton