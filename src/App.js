import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './Components/NoteList/NoteList';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import LoginForm from './Components/LoginForm/LoginForm';
import {Routes, Route} from 'react-router-dom';
import "./App.css";

const App = () => {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem('reactnotes')) || []
	);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('reactnotes')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'reactnotes',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<>
			<div className={`${darkMode && 'dark-mode'}`}>
				<div className='container'>
					<Routes>
						<Route 
							path = '/notes' 
							element = {
								<>
									<Header handleToggleDarkMode={setDarkMode} />
									<Search handleSearchNote={setSearchText} />
									<NotesList
										notes={notes.filter((note) =>
											note.text.toLowerCase().includes(searchText)
										)}
										handleAddNote={addNote}
										handleDeleteNote={deleteNote}
									/>
								</>
							}
						/>
						<Route path='Login' element={<LoginForm />} />
					</Routes>
				</div>
			</div>
		</>
	);
};

export default App;