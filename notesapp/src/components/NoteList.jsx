function NoteList({ notes = [], setEditingIndex, deleteNote }) {
  return (
    <ul>
      {notes.map((note, i) => (
        <li key={i}>
          <strong>{note.title}</strong> — {note.content}

          <button onClick={() => setEditingIndex(i)}>Edit</button>
          <button onClick={() => deleteNote(i)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
