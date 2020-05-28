import React from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

const ContactPage =()=> {
	return (
		<div>
			<h1>Contact</h1>
			<form>
				<FormInput label='Your Name' value='' onChange={(e) => {}} required />
				<FormInput label='Your Email' value='' onChange={(e) => {}} />
				<FormInput label='Your Phone' value='' onChange={(e) => {}} />

				<CustomButton>Click Me!</CustomButton>
			</form>
		</div>
	)
}

export default ContactPage