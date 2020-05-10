import React from 'react'

import Spinner from '../spinner/spinner.component'

export const WithSpinner =(WrappedComponent)=> ({ isLoading, ...otherProps}) => (
	isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
)
