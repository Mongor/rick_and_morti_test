import React from 'react';
import './LoadingScreen.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingScreen = () => {
	return (
		<div className='locadingScreen'>
			<CircularProgress />
		</div>
	);
};

export default LoadingScreen;
