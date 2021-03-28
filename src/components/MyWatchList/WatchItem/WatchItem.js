import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import './WatchItem.scss';

const WatchItem = props => {
	return (
		<div className='watch_item'>
			<Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} />
			<span>name</span>
			<span>some text</span>
			<Button variant='contained' color='secondary'>
				x
			</Button>
		</div>
	);
};

export default WatchItem;
