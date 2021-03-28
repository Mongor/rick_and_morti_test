import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

import './WatchForm.scss';

const WatchForm = (props) => {
	const { handleSubmit, changeName, changeComment, formValues } = props;
	return (
		<section className='form_wraper'>
			<form action='#' className='action_form'>
				<TextField
					label='Episode name'
					variant='outlined'
					onChange={changeName}
				/>
				<TextField
					label='Comment'
					variant='outlined'
					onChange={changeComment}
				/>
				<Button
					className='save_icon'
					variant='contained'
					color='primary'
					size='large'
					startIcon={<SaveIcon />}
					disabled={formValues.name.length ? true : false}
					onClick={(e) => handleSubmit(e)}>
					Save
				</Button>
			</form>
		</section>
	);
};

export default WatchForm;
