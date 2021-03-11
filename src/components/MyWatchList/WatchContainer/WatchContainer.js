import React from 'react';
import WatchItem from '../WatchItem/WatchItem';

import Paper from '@material-ui/core/Paper';

import './WatchContainer.scss';

const WatchContainer = () => {
	return (
		<Paper className='watch_container'>
			<WatchItem />
		</Paper>
	);
};

export default WatchContainer;
