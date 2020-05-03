import React from 'react'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles.jsx'

const CartDropdown =({ cartItems, history, dispatch })=> (
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (cartItems.map(item => <CartItem key={item.id} item={item} />)) 
				: <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>}
		</CartItemsContainer>
		<CustomButton onClick={() => {
			history.push('/checkout')
			dispatch(toggleCartHidden())
		}}>Go to checkout</CustomButton>
	</CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))