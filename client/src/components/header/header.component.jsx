import React from 'react'


import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'


const Header =({ currentUser, hidden, signOutStart })=> (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo className='logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>Shop</OptionLink>
			<OptionLink to='/contact'>Contact</OptionLink>
			{ currentUser ? <React.Fragment>
					<OptionLink to='/profile'>Profile</OptionLink>
					<OptionLink as='div' onClick={signOutStart} className='sign-out'>Sign out</OptionLink> 
				</React.Fragment> 
			: <OptionLink to='/signin'>Sign in</OptionLink> }
			<CartIcon />
		</OptionsContainer>
		{ hidden || <CartDropdown /> }
	</HeaderContainer>
)

const mapStateToProps = createStructuredSelector({ // calls each function with state as param
	currentUser: selectCurrentUser, 
	hidden: selectCartHidden
})

const mapDispatchToProps =(dispatch)=> ({
	signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)