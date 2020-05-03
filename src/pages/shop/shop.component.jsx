import React from 'react'

import { WithSpinner } from '../../components/with-spinner/with-spinner.component'
import { firestore, mapCollectionSnapshot } from '../../firebase/firebase.utils'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component{
	state = {
		loading: true
	}

	unsubscribeFromSnapshot = null

	componentDidMount() {
		const { updateCollections } = this.props
		const collectionRef = firestore.collection('collections')
		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			const collectionMap = mapCollectionSnapshot(snapshot)
			updateCollections(collectionMap)
			this.setState({ loading: false })
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromSnapshot()
	}

	render() { 
		const { loading } = this.state
		const { match } = this.props

		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
				<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
			</div>
		)
	}
} 

const mapDispatchToProps =(dispatch)=> ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)