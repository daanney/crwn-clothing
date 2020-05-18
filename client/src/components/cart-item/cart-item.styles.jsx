import styled from 'styled-components'

export const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 100px;
	min-height: 100px;
	margin-bottom: 15px;
`

export const CartImageWrapper = styled.div`
	height: 100px;
	width: 30%;
	border-radius: 5px;
	border: 1px solid white;
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
`

export const CartItemImage = styled.img`
	width: 100%;
	position: absolute;
	top: -50%;
	bottom: -50%;
	left: 0;
	right: 0;
	margin: auto;
`

export const ItemDetailsContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;
`

export const ItemName = styled.span`
	font-size: 20px;
	color: #000;
`

export const ItemPrice = styled.span`
	font-weight: bold;
	color: #888;
`