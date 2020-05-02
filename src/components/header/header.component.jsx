import React from 'react'

import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'


const Header =({ currentUser, hidden })=> (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/shop'>Contact</Link>
            { currentUser ? <div className='option' onClick={() => auth.signOut()}>Sign out</div> 
                : <Link className='option' to='/signin'>Sign in</Link>}
            { currentUser && <div className='user-icon' style={{backgroundImage: `url(${currentUser.photoURL})`}}></div> }
            <CartIcon />
        </div>
        { hidden || <CartDropdown /> }
    </div>
)

const mapStateToProps = createStructuredSelector({ // calls each function with state as param
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)