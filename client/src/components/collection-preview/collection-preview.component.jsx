import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'
import { CollectionPreviewContainer, CollectionPreviewTitle, CollectionPreviews, CollectionLink } from './collection-preview.styles.jsx'

const CollectionPreview =({ title, items, routeName, itemCount = 4 })=> (
	<CollectionPreviewContainer>
		<CollectionPreviewTitle>
			{title}
			<CollectionLink to={`/shop/${routeName}`}>&#8677;</CollectionLink>
		</CollectionPreviewTitle>
		<CollectionPreviews>
			{items.filter((item, i) => i<itemCount).map((item) => (
				<CollectionItem key={item.id} item={item} />
			))}
		</CollectionPreviews>
	</CollectionPreviewContainer>
)


export default CollectionPreview