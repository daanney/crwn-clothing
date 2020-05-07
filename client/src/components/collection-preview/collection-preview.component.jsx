import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'
import { CollectionPreviewContainer, CollectionPreviewTitle, CollectionPreviews } from './collection-preview.styles.jsx'

const CollectionPreview =({ title, items, itemCount = 4 })=> (
	<CollectionPreviewContainer>
		<CollectionPreviewTitle>{title}</CollectionPreviewTitle>
		<CollectionPreviews>
			{items.filter((item, i) => i<itemCount).map((item) => (
				<CollectionItem key={item.id} item={item} />
			))}
		</CollectionPreviews>
	</CollectionPreviewContainer>
)


export default CollectionPreview