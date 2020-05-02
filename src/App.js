import React from 'react'
import './App.css'

import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component'

class App extends React.Component {

  authUnsubscribe = null

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.authUnsubscribe = auth.onAuthStateChanged(user => this.setState({ currentUser: user }))
  }

  componentWillUnmount() {
    this.authUnsubscribe()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndUp} />
        </Switch>
      </div>
    )
  }
}

export default App
