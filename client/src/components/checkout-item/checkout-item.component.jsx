import React from 'react'

import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

import { CheckoutItemContainer, ItemImageContainer, ItemName, ItemQuantity, ItemQuantityContainer, ItemQuantityArrow, ItemPrice, ItemRemove } from './checkout-item.styles.jsx'

const CheckoutItem =({ item, clearItem, addItem, removeItem })=> {
	const {name, imageUrl, price, quantity} = item

	return (
	<CheckoutItemContainer>
		<ItemImageContainer>
			<div className='image-wrap'><img src={imageUrl} alt='item' /></div>
		</ItemImageContainer>
		<ItemName>{name}</ItemName>
		<ItemQuantityContainer>
			<ItemQuantityArrow onClick={() => removeItem(item)}>&#10094;</ItemQuantityArrow>
			<ItemQuantity>{quantity}</ItemQuantity>
			<ItemQuantityArrow onClick={() => addItem(item)}>&#10095;</ItemQuantityArrow>
		</ItemQuantityContainer>
		<ItemPrice>${price}</ItemPrice>
		<ItemRemove onClick={() => clearItem(item)}>&#10005;</ItemRemove>
	</CheckoutItemContainer>
	)
}

const mapDispatchToProps =(dispatch)=> ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)