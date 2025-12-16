import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const updateNote = (index, updatedNote) => {
    setNotes(
      notes.map((note, i) => (i === index ? updatedNote : note))
    );
    setEditingIndex(null);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // 🔍 SEARCH
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  // ↕️ SORT
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="container">
      <h1>Notes App</h1>

      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">A → Z</option>
        <option value="desc">Z → A</option>
      </select>

      <NoteForm
        editingIndex={editingIndex}
        notes={notes}
        addNote={addNote}
        updateNote={updateNote}
      />

      <NoteList
        notes={sortedNotes}
        setEditingIndex={setEditingIndex}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
