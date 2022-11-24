import React, { useState } from 'react';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';


function App() {

  const [notes, setNotes] = useState([
    {
      text:"Hello World",
      time:"3:12PM",
      color:"cyan"
    },

    {
      text:"rgrgrgr",
      time:"3:24PM",
      color:"yellow"
    },

    {
      text:"dfbfbergerg",
      time:"3:35PM",
      color:"green"
    },

    {
      text:"Bye World",
      time:"3:44PM",
      color:"blue"
    },
  ])

  const addNote=(color)=>{
    const tempNotes=[...notes]
    
  }
  return (
    <div className="App">
      <Sidebar addNote={addNote}/>
      <NoteContainer notes={notes}/>
    </div>
  );
}

export default App;
