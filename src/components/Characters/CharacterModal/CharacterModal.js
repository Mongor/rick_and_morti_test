import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import './CharacterModal.scss';

const CharacterModal = props => {
	const { open, setOpen, charactersAll, characterId } = props;
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Dialog onClose={handleClose} open={open} maxWidth='md'>
			{charactersAll
				.filter(character => character.id === characterId)
				.map((charData, i) => (
					<div className='dialog_block' key={i}>
						<div className='description'>
							<div className='dec_img'>
								<img
									src={charData.image}
									alt={charData.image}
								/>
							</div>
							<div className='des_info'>
								<div className='des_info_more'>
									<span>Name </span>
									<span>{charData.name}</span>
								</div>
								<div className='des_info_more'>
									<span>Gender </span>
									<span
										className={
											charData.gender === 'unknown'
												? 'red'
												: ''
										}>
										{charData.gender}
									</span>
								</div>
								<div className='des_info_more'>
									<span>Location</span>
									<span
										className={
											charData.location.name === 'unknown'
												? 'red'
												: ''
										}>
										{charData.location.name}
									</span>
								</div>
								<div className='des_info_more'>
									<span>Origin</span>
									<span
										className={
											charData.origin.name === 'unknown'
												? 'red'
												: ''
										}>
										{charData.origin.name}
									</span>
								</div>
								<div className='des_info_more'>
									<span>Episode counts </span>
									<span>{charData.episode.length}</span>
								</div>
								<div className='des_info_more'>
									<span>Status</span>
									<span
										className={
											charData.status === 'unknown'
												? 'red'
												: ''
										}>
										{charData.status}
									</span>
								</div>
								<div className='des_info_more'>
									<span>Species</span>
									<span
										className={
											charData.species === 'unknown'
												? 'red'
												: ''
										}>
										{charData.species}
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
		</Dialog>
	);
};

export default CharacterModal;
