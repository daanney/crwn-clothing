import React, { useEffect, lazy, Suspense } from 'react'
import { GlobalStyle } from './global.styles'

import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndUpPage = lazy(() => import('./pages/sign-in-and-up/sign-in-and-up.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))

const App =({ checkUserSession, currentUser })=> {

	useEffect(() => { checkUserSession() }, [checkUserSession])

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route exact path='/checkout' component={CheckoutPage} />
						<Route path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndUpPage />)} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps =(dispatch)=> ({
	checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
