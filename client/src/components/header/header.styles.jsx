import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 20px;
	}

	@media screen and (max-width: 600px) {
		padding: 0;
	}
`

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;

	@media screen and (max-width: 800px) {
		width: 50px;
		padding: 0
	}
`

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 800px) {
		width: 80%;
	}
`

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	font-size: 14px;
	text-transform: uppercase;
	cursor: pointer;
	background: #fff;
	color: #000;
	border-radius: 5px;
	white-space: nowrap;

	&:hover {
		background: #eee;
	}

	&.sign-out {
		background: #000;
		color: #fff;

		&:hover {
			background: #444;
		}
	}

	@media screen and (max-width: 800px) {
		font-size: 12px;
	}

	@media screen and (max-width: 460px) {
		font-size: 10px;
		padding: 10px 5px;
		background: #eee;
		margin: 0 2px;
	}
`