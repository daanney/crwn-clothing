import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import { CheckoutPageContainer, CheckoutHeader, HeaderBlock, CheckoutTotal, TestWarning } from './checkout.styles.jsx'

const CheckoutPage =({ cartItems, total })=> (
	<CheckoutPageContainer>
		<CheckoutHeader>
			{['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(heading => 
			<HeaderBlock key={heading}>{heading}</HeaderBlock>
			)}
		</CheckoutHeader>

		{cartItems.map(item => <CheckoutItem key={item.id} item={item} />)}

		<CheckoutTotal>TOTAL: ${total}</CheckoutTotal>
		<TestWarning>
			* Please use the following test credit card for payments *
			<br />
			4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
		</TestWarning>
		<StripeCheckoutButton price={total} />
	</CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)