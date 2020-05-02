import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage =({ cartItems, total })=> (
    <div className='checkout-page'>
        <div className='checkout-header'>
            {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(heading => 
            <div class='header-block'>
                <span>{heading}</span>
            </div>
            )}
        </div>
        {cartItems.map(item => <CheckoutItem key={item.id} item={item} />)}

        <div className='total'>TOTAL: ${total}</div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)