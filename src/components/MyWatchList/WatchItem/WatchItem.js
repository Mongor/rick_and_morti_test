import React from 'react';

import './WatchItem.scss';

const WatchItem = (props) => {
	return (
		<div className='watch_item'>
			<input type='checkbox' />
			<span>name</span>
			<span>some text</span>
			<button>x</button>
		</div>
	);
};

export default WatchItem;
