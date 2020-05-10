import styled, { css } from 'styled-components'

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;

	@media screen and (max-width: 800px) {
		font-size: smaller;
	}
`

const itemColumnStyles = css`
	width: 23%;
`

export const ItemImageContainer = styled.div`
	${itemColumnStyles}
	padding-right: 25px;

	.image-wrap {
		width: 100%;
		height: 150px;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
	}

	img {
		width: 100%;
		min-height: 150px;
		height: auto;
		margin: auto;
		position: absolute;
		top: 0;
		bottom: 0;
	}

	@media screen and (max-width: 800px) {
		.image-wrap {
			height: 100px;
		}
	}
`

export const ItemName = styled.span`
	${itemColumnStyles}
`

export const ItemQuantityContainer = styled.span`
	${itemColumnStyles}
	display: flex;
`

export const ItemQuantityArrow = styled.span`
	cursor: pointer;

	@media screen and (max-width: 800px) {
		font-size: 16px;
	}
`

export const ItemQuantity = styled.span`
	margin: 0 10px;

	@media screen and (max-width: 800px) {
		font-size: 16px;
	}
`

export const ItemPrice = styled.span`
	${itemColumnStyles}
`

export const ItemRemove = styled.div`
	padding-left: 12px;
	cursor: pointer;
`