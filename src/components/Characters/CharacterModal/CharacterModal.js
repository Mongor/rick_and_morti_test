import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import './CharacterModal.scss';

const CharacterModal = props => {
	const { open, setOpen, character, characterId } = props;
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Dialog onClose={handleClose} open={open}>
			{characterId ? (
				<div className='dialog_block'>
					<span>{character.name}</span>
				</div>
			) : (
				<div className='dialog_block'>
					<span>noens</span>
				</div>
			)}
			{/* <div className='dialog_block'>
				<span>{character.name}</span>
			</div> */}
		</Dialog>
	);
};

export default CharacterModal;
