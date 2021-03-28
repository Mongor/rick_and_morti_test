import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const WatchForm = () => {
	return (
		<section>
			<form action='#'>
				<TextField
					id='outlined-basic'
					label='Outlined'
					variant='outlined'
				/>
				<TextField
					id='outlined-basic'
					label='Outlined'
					variant='outlined'
				/>
			</form>
		</section>
	);
};

export default WatchForm;
