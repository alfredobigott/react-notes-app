import { useState, useEffect } from 'react'

function NoteForm({ editingIndex, notes, updateNote, addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingIndex !== null) {
      setTitle(notes[editingIndex].title);
      setContent(notes[editingIndex].content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingIndex, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = { title, content };

    if (editingIndex === null) {
      addNote(newNote);
    } else {
      updateNote(editingIndex, newNote);
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button>
        {editingIndex === null ? "Add note" : "Update note"}
      </button>
    </form>
  );
}

export default NoteForm;
