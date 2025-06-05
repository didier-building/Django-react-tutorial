import React from "react";
import "../styles/Note.css"
const Note = ({note, onDelete}) => {
  const fromattedDate = new Date(note.created_at).toLocaleDateString("en-US");
  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}t</p>
      <p className="note-date">{fromattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
};

export default Note;
