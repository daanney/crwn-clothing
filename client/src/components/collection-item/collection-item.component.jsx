import React from 'react'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import CustomButton from '../custom-button/custom-button.component'

import { CollectionItemContainer, CollectionItemImage, CollectionItemFooter, CollectionItemName, CollectionItemPrice } from './collection-item.styles.jsx'

const CollectionItem =({item, addItem})=> {
	const { name, price, imageUrl } = item

	return (
	<CollectionItemContainer>
		<CollectionItemImage className='item-image' style={{backgroundImage: `url(${imageUrl})`}}></CollectionItemImage>
		<CollectionItemFooter>
			<CollectionItemName>{name}</CollectionItemName>
			<CollectionItemPrice>{price}</CollectionItemPrice>
		</CollectionItemFooter>
		<CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
	</CollectionItemContainer>
	)
}

const mapDispatchToProps =(dispatch)=> ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)