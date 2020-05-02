import React from 'react'

import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview =({ title, items, itemCount = 4 })=> (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items.filter((item, i) => i<itemCount).map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)


export default CollectionPreview