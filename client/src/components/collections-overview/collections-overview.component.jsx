import React from 'react'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCollectionPreviews } from '../../redux/shop/shop.selectors'

import { CollectionsOverviewContainer } from './collections-overview.styles.jsx'

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview =({ collections })=> (
	<CollectionsOverviewContainer>
		{collections.map(({id, ...collectionProps}) => (
			<CollectionPreview key={id} {...collectionProps} itemCount='5' />
		))}
	</CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionPreviews
})

export default connect(mapStateToProps)(CollectionsOverview)