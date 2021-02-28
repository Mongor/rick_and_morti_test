import React from 'react';

import Button from '@material-ui/core/Button';

import './CustomPagination.scss';

const CustomPagination = (props) => {
	const { setDataUrl, pagInfo } = props;

	console.log(pagInfo);

	const getNextPage = () => {
		if (pagInfo.info.next !== null) {
			setDataUrl(pagInfo.info.next);
		}
	};

	const getPrevPage = () => {
		if (pagInfo.info.prev !== null) {
			setDataUrl(pagInfo.info.prev);
		}
	};

	return (
		<div className='bottomPagination'>
			<Button
				variant='contained'
				color={pagInfo.info.prev === null ? 'inherit' : 'primary'}
				onClick={() => getPrevPage()}>
				Prev
			</Button>
			<Button
				variant='contained'
				color={pagInfo.info.next === null ? 'inherit' : 'primary'}
				onClick={() => getNextPage()}>
				Next
			</Button>
		</div>
	);
};

export default CustomPagination;
