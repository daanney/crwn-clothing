import styled from 'styled-components'

export const ProfilePageContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 15px;

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-gap: 0;
	}
`

export const ProfileImage = styled.div`
`

export const ProfileDetails = styled.div`
`