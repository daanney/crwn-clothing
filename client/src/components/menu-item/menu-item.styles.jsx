import styled, { css } from 'styled-components'

const sizeStyles = css`
	height: 240px;
`

const sizeLargeStyles = css`
	height: 400px;
`

const getSizeStyles =(props)=> {
	if(props.size === 'large') return sizeLargeStyles
	return sizeStyles
}

export const MenuItemBackground = styled.div`
	height: 100%;
	width: 100%;
	background-position: center;
	background-size: cover;
`

export const MenuItemContent = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	text-transform: uppercase;
	position: absolute;
`

export const MenuItemTitle = styled.h1`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`

export const MenuItemSubtitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`

export const MenuItemContainer = styled.div`
	min-width: 30%;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	${getSizeStyles}

	&:hover {
		cursor: pointer;

		& ${MenuItemBackground} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& ${MenuItemContent} {
			opacity: 0.9;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	@media screen and (max-width: 800px) {
		height: 200px;
	}
`