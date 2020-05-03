import React from 'react'

import { selectCollection } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'

import { CollectionPageContainer, CollectionPageTitle, CollectionPageItems } from './collection.styles.jsx'

import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage =({ collection })=> {
	const { title, items } = collection

	return (
	<CollectionPageContainer>
		<CollectionPageTitle>{title}</CollectionPageTitle>
		<CollectionPageItems>
			{items.map(item => <CollectionItem key={item.id} item={item} />)}
		</CollectionPageItems>
	</CollectionPageContainer>
	)
}

const mapStateToProps =(state, ownProps)=> ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)