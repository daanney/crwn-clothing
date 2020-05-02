import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage =({ collections })=> (
    <div className='shop-page'>
        <h1>Shop Page</h1>
        {collections.map(({id, ...collectionProps}) => (
            <CollectionPreview key={id} {...collectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)