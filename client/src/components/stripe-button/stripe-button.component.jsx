import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({ price })=> {
	const priceforStripe = price * 100
	const pkey = 'pk_test_5hPYl9hgbJ5X7t8oLDY8n01z00YxwUD2Od'

	const onToken =(token)=> {
		axios({
			url: 'payment',
			method: 'post',
			data: { amount: priceforStripe, token }
		}).then(response => {
			alert('Payment Successful!')
		}).catch(error => {
			console.log('Payment error: ', JSON.parse(error))
			alert('There was an issue with your payment. Please ensure you use the provided card.')
		})
	}

	return (
		<StripeCheckout billingAddress shippingAddress label='Pay Now' name='CRWN Clothing Shop' image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`} amount={priceforStripe} panelLabel='Pay Now' token={onToken} stripeKey={pkey} />
	)
}

export default StripeCheckoutButton