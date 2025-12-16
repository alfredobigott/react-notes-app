function NoteList({setEditingIdex, notes, deleteNote }){
    return (
        <div>
            <ul>
                {notes.map((note, i) => (
                    <li key={i}>
                        {Notes.title} - {Notes.content}

                        <button onClick={() => setEditingIndex(i)}>Edit</button>
                        <button onCLick={() => deleteNote(i)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NoteList