import styled, { css } from 'styled-components'

const buttonMainColor = '#000'
const buttonSecondaryColor = '#fff'

const googleMainColor = '#4285f4'
const googleSecondaryColor = '#fff'


const getButtonStyles =(props)=> {
	if(props.isGoogleSignIn) return googleButtonStyles
	if(props.inverted) return invertedButtonStyles
	return buttonStyles
}

const buttonStyles = css`
	background-color: ${buttonMainColor};
	color: ${buttonSecondaryColor};
	border-color: ${buttonSecondaryColor};

	&:hover {
		background-color: ${buttonSecondaryColor};
		color: ${buttonMainColor};
		border-color: ${buttonMainColor};
	}
`

const invertedButtonStyles = css`
	background-color: ${buttonSecondaryColor};
	color: ${buttonMainColor};
	border-color: ${buttonMainColor};

	&:hover {
		background-color: ${buttonMainColor};
		color: ${buttonSecondaryColor};
		border: ${buttonSecondaryColor};
	}
`

const googleButtonStyles = css`
	background-color: ${googleMainColor};
	color: ${googleSecondaryColor};

	&:hover {
		background-color: ${googleSecondaryColor};
		color: ${googleMainColor};
		border-color: ${googleMainColor};
	}
`

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 20px;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
	font-family: 'Open Sans';
	border-width: 1px;
	border-style: solid;
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles}
`
