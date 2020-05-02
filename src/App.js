import React from 'react'
import './App.css'

import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { setCurrentUser } from './redux/user/user.actions'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component'

class App extends React.Component {

  authUnsubscribe = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.authUnsubscribe = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => setCurrentUser({ id: snapshot.id, ...snapshot.data() }))
      }else {
        setCurrentUser(null)
      }
    })
  }

  componentWillUnmount() {
    this.authUnsubscribe()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndUpPage />)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps =(dispatch)=> ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
