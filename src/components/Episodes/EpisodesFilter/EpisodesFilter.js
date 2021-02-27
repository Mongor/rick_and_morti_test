import React from 'react';

import './EpisodesFilter.scss';

const EpisodesFilter = props => {
	// const findName = e => {
	// 	let updatedEpisodes = episodesData.filter(item => {
	// 		return (
	// 			item.name.toLowerCase().search(e.target.value.toLowerCase()) !==
	// 			-1
	// 		);
	// 	});
	// 	if (updatedEpisodes.length !== undefined) {
	// 		setEpisodesData((episodesData = updatedEpisodes));
	// 	}
	// 	console.log('updatedEpisodes', updatedEpisodes);
	// };

	return (
		<div className='name_filter_container'>
			<input
				type='text'
				id='episodes_filter'
				placeholder='Episode Name'
				// onChange={findName}
			/>
		</div>
	);
};

export default EpisodesFilter;
