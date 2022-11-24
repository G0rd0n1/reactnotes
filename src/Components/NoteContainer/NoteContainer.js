import React from 'react';
import Note from '../Note/Note';
import './NoteContainer.css'

function NoteContainer() {
  return (
    <div className='note-container'>
      <h2>Notes</h2>
      <div className='note-container_notes custom-scroll'>

        <Note 
          note={{
            text:"Gordon",
            time:"08:10 AM",
            color:"cyan"
          }} 
        />

        <Note
          note={{
            text:"Gordon",
            time:"08:10 AM",
            color:"cyan"
          }} 
        />

        <Note
          note={{
            text:"Gordon",
            time:"08:10 AM",
            color:"cyan"
          }} 
        />

        <Note
          note={{
            text:"Gordon",
            time:"08:10 AM",
            color:"cyan"
          }} 
        />

        <Note 
          note={{
            text:"Gordon",
            time:"08:10 AM",
            color:"cyan"
          }} 
        />

        <Note
          note={{
            text:"Gordon",
            time:"08:10 AM",
            color:"cyan"
          }} 
        />

        <Note
          note={{
            text:"Gordon",
            time:"08:10 AM",
            color:"cyan"
          }} 
        />

        <Note
          note={{
            text:"Gordon",
            time:"08:10 AM",
            color:"cyan"
          }} 
        />
      </div>
    </div>
  );
}

export default NoteContainer
