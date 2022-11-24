import React from 'react';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <NoteContainer />
    </div>
  );
}

export default App;
