import React from 'react'

import { FormInputContainer, FormInputLabel } from './form-input.styles.jsx'

const FormInput =({handleChange, label, ...otherProps})=> (
	<FormInputContainer>
		<input className='form-input' onChange={handleChange} {...otherProps} />
		{label && <FormInputLabel dataLength={otherProps.value.length}>
			{label} {otherProps.required && <span>*</span>}
		</FormInputLabel>}
	</FormInputContainer>
)

export default FormInput