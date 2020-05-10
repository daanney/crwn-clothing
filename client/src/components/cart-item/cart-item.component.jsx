import React from 'react'

import { CartItemContainer, CartItemImage, ItemDetailsContainer, ItemName, ItemPrice } from './cart-item.styles.jsx'

const CartItem =({item: {imageUrl, price, name, quantity}})=> (
	<CartItemContainer>
		<CartItemImage src={imageUrl} alt='item' />
		<ItemDetailsContainer>
			<ItemName>{name}</ItemName>
			<ItemPrice>{quantity}x ${price}</ItemPrice>
		</ItemDetailsContainer>
	</CartItemContainer>
)

export default React.memo(CartItem)