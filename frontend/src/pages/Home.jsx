import React from "react";
import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";
const Home = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}`)
      .then((res) => {
        if (res.status === 204) {
          alert("note was deleted");
        } else {
          alert("note was not deleted");
        }
        getNotes();
      })
      .catch((error) => {
        alert(error);
      });
  };
  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { title, content })
      .then((res) => {
        if (res.status === 201) alert("note was created");
        else alert("note was not created");
        getNotes();
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
      <h2>Create a Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <label htmlFor="content"> Content:</label>
        <textarea
          name="content"
          id="content"
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
