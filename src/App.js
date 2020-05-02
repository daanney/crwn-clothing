import React from 'react'
import './App.css'

import { Switch, Route } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

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
    this.authUnsubscribe = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          console.log(snapshot)
          this.setState({ currentUser: {id: snapshot.id, ...snapshot.data()} }, () => console.log(this.state))
        })
      }else {
        this.setState({ currentUser: null })
      }
    })
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
