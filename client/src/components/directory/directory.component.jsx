import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import { DirectoryContainer } from './directory.styles.jsx'

import MenuItem  from '../menu-item/menu-item.component'

const Directory =({sections})=> (
	<DirectoryContainer>
		{sections.map(({id, ...sectionProps}) => (
			<MenuItem key={id} {...sectionProps} />
		))}
	</DirectoryContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)