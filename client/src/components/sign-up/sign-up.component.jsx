import React, { useState } from 'react'

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions.js'

import { SignUpContainer } from './sign-up.styles.jsx'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

const SignUp =({ signUpStart })=> {
	const [ userCredentials, setCredentials ] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })
	const { displayName, email, password, confirmPassword } = userCredentials

	const handleSubmit = async event => {
		event.preventDefault()

		if(password !== confirmPassword) {
			alert(`Passwords don't match!`)
			return
		}
		
		signUpStart(userCredentials)
	}

	const handleChange = event => {
		const { name, value } = event.target
		setCredentials({ ...userCredentials, [name]: value })
	}

	return (
		<SignUpContainer>
			<h2>I do not have an account</h2>
			<span>Sign up with your email and password</span>

			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required />
				<FormInput type='text' name='email' value={email} onChange={handleChange} label='Email' required />
				<FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required />
				<FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required />
				<CustomButton type='submit'>Sign up</CustomButton>
			</form>
		</SignUpContainer>
	)
}

const mapDispatchToProps =(dispatch)=> ({
	signUpStart: (userData) => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp)