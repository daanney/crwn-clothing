import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`

export const CollectionPreviewTitle = styled(Link)`
	font-size: 28px;
	margin-bottom: 25px;
`

export const CollectionPreviews = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 15px;
`