import React, { useState } from 'react';
import WatchItem from '../WatchItem/WatchItem';
import WatchForm from '../WatchForm/WatchForm';
import Paper from '@material-ui/core/Paper';

import './WatchContainer.scss';

const WatchContainer = () => {
	const [formData, setFormData] = useState({
		id: '',
		name: '',
		comment: '',
	});

	let formValues = {
		name: '',
		comment: '',
	};

	let changeName = (e) => {
		formValues.name = e.target.value;
		console.log(formValues.name);
	};

	let changeComment = (e) => {
		formValues.comment = e.target.value;
		console.log(formValues.comment);
	};

	let handleSubmit = (e) => {
		e.preventDefault();

		setFormData({
			id: new Date(),
			name: formValues.name,
			comment: formValues.comment,
		});

		console.log(formData, 'click form btn');
		console.log(formValues, 'click form btn');
	};
	return (
		<Paper className='watch_container'>
			<WatchForm
				handleSubmit={handleSubmit}
				changeName={changeName}
				changeComment={changeComment}
				formData={formData}
				formValues={formValues}
			/>
			<div className='watch_item_container'>
				<WatchItem />
				<WatchItem />
			</div>
		</Paper>
	);
};

export default WatchContainer;
