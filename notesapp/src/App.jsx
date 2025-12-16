import { useState, useEffect } from 'react'
import './components/NoteForm'
import './components/NoteList'
import './App.css'

function App() {
 
  const [notes, setNotes] = useState (() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved): [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [editingIndex, setEditingIndex] = useState(null);
  

  
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const updateNote = (index, upNote) => {
    setNotes(
      notes.map((note, i) =>
        i === index ? upNote : note
      )
    );
    setEditingIndex(null);
  };

  const deleteNote = () => {

  };



  return (
   <div>
    <h1>NOTES APP</h1>

    <NoteForm
      editingIndex={editingIndex}
      notes={notes}
      addNote={addNote}
      updateNote={updateNote}
    />

    <NoteList
    
    />
   </div>
  )
}

export default App
