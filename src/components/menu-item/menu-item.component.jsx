import React from 'react'

import { withRouter } from 'react-router-dom'

import { MenuItemContainer, MenuItemBackground, MenuItemContent, MenuItemTitle, MenuItemSubtitle } from './menu-item.styles.jsx'

const MenuItem =({title, imageUrl, size, history, linkUrl, match})=> (
	<MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<MenuItemBackground style={{backgroundImage: `url(${imageUrl})`}} />
		<MenuItemContent>
			<MenuItemTitle>{title}</MenuItemTitle>
			<MenuItemSubtitle>Shop now</MenuItemSubtitle>
		</MenuItemContent>
	</MenuItemContainer>
)

export default withRouter(MenuItem)