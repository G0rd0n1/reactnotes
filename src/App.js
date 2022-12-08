import NotesList from './Components/NoteList/NoteList';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import Login from './Components/Registration/Login';
import Home from './Components/Registration/Home';
import ProtectedRoute from './Components/context/ProtectedRoute';


import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
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
							path='/login' 
							element = {
								<Login />
							}
						/>

						<Route 
							path='/' 
							element = {
								<Home />
							}
						/>

						<Route 
							path = '/notes' 
							element = {
								<>
								<ProtectedRoute>
									<Header handleToggleDarkMode={setDarkMode} />
									<Search handleSearchNote={setSearchText} />
									<NotesList
										notes={notes.filter((note) =>
											note.text.toLowerCase().includes(searchText)
										)}
										handleAddNote={addNote}
										handleDeleteNote={deleteNote}
									/>
								</ProtectedRoute>
								</>
							}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
};

export default App;