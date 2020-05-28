import styled from 'styled-components'
import { ReactComponent as ShoppingIconSvg } from '../../assets/shopping-bag.svg'

export const CartIconContainer = styled.div`
	width: 36px;
	height: 36px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: 1px solid transparent;
	border-radius: 5px;
	
	&:hover {
		border-color: #000;
	}
`

export const ShoppingIcon = styled(ShoppingIconSvg)`
	width: 28px;
	height: 28px;
`

export const ItemCountContainer = styled.div`
	position: absolute;
	font-size: 12px;
	font-weight: bold;
	bottom: 5px;
`