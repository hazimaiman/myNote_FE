import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import SignIn from "./SignIn"; // Make sure to create this component
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch notes from the backend
  useEffect(() => {
    if (isAuthenticated) {
      axios.get("https://mynote-be.onrender.com/api/notes")
        .then(response => setNotes(response.data))
        .catch(error => console.error("Error fetching notes: ", error));
    }
  }, [isAuthenticated]);

  // Handle sign in
  const handleSignIn = (username) => {
    setIsAuthenticated(true);
    setUser(username);
  };

  // Add a new note
  function addNote(newNote) {
    axios.post("https://mynote-be.onrender.com/api/notes", newNote)
      .then(response => {
        setNotes(prevNotes => [...prevNotes, response.data]);
      })
      .catch(error => console.error("Error adding note: ", error));
  }

  // Delete a note
  function deleteNote(id) {
    axios.delete(`https://mynote-be.onrender.com/api/notes/${id}`)
      .then(() => {
        setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
      })
      .catch(error => console.error("Error deleting note: ", error));
  }

  // Sign out function
  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    setNotes([]);
  };

  if (!isAuthenticated) {
    return <SignIn onSignIn={handleSignIn} />;
  }

  return (
    <div>
      <Header username={user} onSignOut={handleSignOut} />
      <CreateArea onAdd={addNote} />
      {notes.map(noteItem => (
        <Note
          key={noteItem._id}
          id={noteItem._id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;