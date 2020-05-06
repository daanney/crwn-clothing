import React from 'react'

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions.js'

import { SignUpContainer } from './sign-up.styles.jsx'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignUp extends React.Component {

	constructor() {
		super()

		this.state = {displayName: '', email: '', password: '', confirmPassword: ''}
	}

	handleSubmit = async event => {
		event.preventDefault()

		const { password, confirmPassword } = this.state
		const { signUpStart } = this.props

		if(password !== confirmPassword) {
			alert(`Passwords don't match!`)
			return
		}
		
		signUpStart(this.state)
		/*
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password)
			await createUserProfileDocument(user, { displayName })
			this.setState({displayName: '', email: '', password: '', confirmPassword: ''})
		}catch(error) {
			console.log(error)
		}
		*/
	}

	handleChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state
		
		return (
			<SignUpContainer>
				<h2>I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required />
					<FormInput type='text' name='email' value={email} onChange={this.handleChange} label='Email' required />
					<FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required />
					<FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
					<CustomButton type='submit'>Sign up</CustomButton>
				</form>
			</SignUpContainer>
		)
	}
}

const mapDispatchToProps =(dispatch)=> ({
	signUpStart: (userData) => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp)