import React, { useEffect } from 'react'
import './App.css'

import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

const App =({ checkUserSession, currentUser })=> {

	useEffect(() => { checkUserSession() }, [checkUserSession])

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/checkout' component={CheckoutPage} />
				<Route path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndUpPage />)} />
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
