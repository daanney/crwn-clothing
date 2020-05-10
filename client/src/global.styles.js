import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans', sans-serif;
		padding: 20px 60px;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		color: black;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}
`