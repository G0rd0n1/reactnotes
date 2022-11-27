import React from 'react';
import { MdOutlineSavedSearch } from 'react-icons/md';
import "./Search.css";

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<MdOutlineSavedSearch className='search-icons' size='1.5em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Type to search...'
			/>
		</div>
	);
};

export default Search;