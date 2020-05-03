import styled, { css } from 'styled-components'

const subColor = 'grey'
const mainColor = 'black'

export const FormInputContainer = styled.div`
	position: relative;
	margin: 45px 0;

	.form-input {
		background: none;
		background-color: white;
		color: ${subColor};
		font-size: 18px;
		padding: 10px 10px 10px 5px;
		display: block;
		width: 100%;
		border: none;
		border-radius: 0;
		border-bottom: 1px solid ${subColor};
		margin: 25px 0;

		&:focus {
			outline: none;
		}
	}

	input[type='password'] {
		letter-spacing: 0.3em;
	}
`

const labelStyles = css`
	top: 10px;
	font-size: 16px;
	color: ${subColor};
`

const shrinkLabelStyles = css`
	top: -14px;
	font-size: 12px;
	color: ${mainColor};
`

const getLabelStyles =(props)=> {
	return props.dataLength ? shrinkLabelStyles : labelStyles
}

export const FormInputLabel = styled.label`
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	transition: 300ms ease all;
	${getLabelStyles}

	${FormInputContainer} input:focus ~ & {
		${shrinkLabelStyles}
	}
`