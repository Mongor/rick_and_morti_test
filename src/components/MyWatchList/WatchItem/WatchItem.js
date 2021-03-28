import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

import './WatchItem.scss';

const WatchItem = (props) => {
	return (
		<Paper elevation={3} className='watch_item'>
			<Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} />
			<span className='watch_text'>name</span>
			<span className='watch_text'>some text</span>
			<Button
				className='delete_button'
				variant='contained'
				color='secondary'>
				x
			</Button>
		</Paper>
	);
};

export default WatchItem;
