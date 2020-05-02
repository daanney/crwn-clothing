import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage =({ cartItems, total })=> (
    <div className='checkout-page'>
        <div className='checkout-header'>
            {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(heading => 
            <div key={heading} className='header-block'>
                <span>{heading}</span>
            </div>
            )}
        </div>
        {cartItems.map(item => <CheckoutItem key={item.id} item={item} />)}

        <div className='total'>TOTAL: ${total}</div>
        <div className='test-warning'>
            * Please use the following test credit card for payments *
            <br />
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)