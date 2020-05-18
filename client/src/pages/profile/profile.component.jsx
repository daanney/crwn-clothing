import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser, isCheckingSession } from '../../redux/user/user.selectors'
import { WithSpinner } from '../../components/with-spinner/with-spinner.component'
import { compose } from 'redux'
import { ProfilePageContainer, ProfileImage, ProfileDetails } from './profile.styles'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { updateUserProfileDocument } from '../../firebase/firebase.utils'

const ProfilePage =({ currentUser })=> {
	console.log('profile call', currentUser)
	const [ displayName, setDisplayName ] = useState(currentUser.displayName)

	const handleProfileForm = (event) => {
		event.preventDefault()

		updateUserProfileDocument({ id: currentUser.id, displayName })
			.then(() => alert('Profile updated!'))
			.catch((e) => alert('Whoopsie.. an error happened: ' + e.message))
	}

	const handleChange =(e)=> setDisplayName(e.target.value)

	return (
	<ProfilePageContainer>
		<ProfileImage>
			<img src={currentUser.photoURL} alt='profile' />
		</ProfileImage>
		<ProfileDetails>
			<form onSubmit={handleProfileForm}>
				<h1>{displayName}</h1>
				<FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required />
				<FormInput type='text' name='email' value={currentUser.email} label='Email' required disabled />
				<CustomButton type='submit'>Save</CustomButton>
			</form>
		</ProfileDetails>
	</ProfilePageContainer>
	)
}

export default compose(
	connect(createStructuredSelector({
		isLoading: isCheckingSession,
		currentUser: selectCurrentUser
	})),
	WithSpinner
)(ProfilePage)