import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`

export const CollectionPreviewTitle = styled.h2`
	font-size: 28px;
	line-height: 40px;
	margin: 10px 0 25px 0;
	padding: 0;
`

export const CollectionPreviews = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 15px;
`

export const CollectionLink = styled(Link)`
	background: #fff;
	color: #000;
	border-radius: 4px;
	padding: 0 15px;
	display: inline-block;
	margin-left: 15px;
	border: 1px solid #000;

	&:hover {
		background: #000;
		color: #fff;
	}
`