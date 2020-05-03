import React from 'react'

import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionUserLink } from './header.styles'


const Header =({ currentUser, hidden })=> (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo className='logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>Shop</OptionLink>
			<OptionLink to='/shop'>Contact</OptionLink>
			{ currentUser ? <OptionLink as='div' onClick={() => auth.signOut()}>Sign out</OptionLink> 
				: <OptionLink to='/signin'>Sign in</OptionLink>}
			{ currentUser && <OptionUserLink style={{backgroundImage: `url(${currentUser.photoURL})`}}></OptionUserLink> }
			<CartIcon />
		</OptionsContainer>
		{ hidden || <CartDropdown /> }
	</HeaderContainer>
)

const mapStateToProps = createStructuredSelector({ // calls each function with state as param
	currentUser: selectCurrentUser, 
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)