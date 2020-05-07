import React, { useState } from 'react'

import { SignInContainer, SignInButtons } from './sign-in.styles.jsx'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

const SignIn =({ emailSignInStart, googleSignInStart })=> {
	const [ userCredentials, setCredentials ] = useState({ email: '', password: '' })
	const { email, password } = userCredentials

	const handleSubmit = async event => {
		event.preventDefault()
		emailSignInStart(email, password)
	}

	const handleChange =(e)=> {
		const { value, name } = e.target;
		setCredentials({ ...userCredentials, [name]: value })
	}

	return (
		<SignInContainer>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput label='Email' name='email' type='email' value={email} handleChange={handleChange} required />
				<FormInput label='Password' name='password' type='password' value={password} handleChange={handleChange} required />
				<SignInButtons>
					<CustomButton type='submit'>Sign in</CustomButton>
					<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
				</SignInButtons>
			</form>
		</SignInContainer>
	)
}

const mapDispatchToProps =(dispatch)=> ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)