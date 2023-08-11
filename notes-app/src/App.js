import React, {useState} from 'react';
import './styles/App.css';
import Note from "./components/Note";
import EditNote from "./components/EditNote";
import CreateNoteForm from './components/CreateNoteForm';
import NavBar from "./components/NavBar";

function App() {
  
  const [notes, setNotes] = useState(loadNotesFromLocalStorage());
  const [editingIndex, setEditingIndex] = useState(-1);
  const [isCreatingNote, setIsCreatingNote] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedText, setEditedText] = useState('');

  function saveNotesToLocalStorage(updatedNotes) {
    if (updatedNotes.length === 0) {
      localStorage.removeItem('notes');
    } else {
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }
  }

  function loadNotesFromLocalStorage() {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
  }

  function handleAddNote(newNote) {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setIsCreatingNote(false);
    saveNotesToLocalStorage(updatedNotes); 
  }
  
  function handleSaveEdit(index, editedNote) {
    const updatedNotes = [...notes];
    updatedNotes[index] = editedNote;
    setNotes(updatedNotes);
    setEditingIndex(-1);
    setEditedTitle('');
    setEditedText('');
    saveNotesToLocalStorage(updatedNotes); 
  }

  function handleDeleteNote(index) {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes); 
  }

  function handleEdit(index) {
    const selectedNote = notes[index];
    setEditingIndex(index);
    setEditedTitle(selectedNote.title);
    setEditedText(selectedNote.text);
  }

  function handleCancelEdit() {
    setEditingIndex(-1);
    setEditedTitle('');
    setEditedText('');
  }

  function handleCreateNote() {
    setIsCreatingNote(true);
  }

  function handleCancelCreateNote() {
    setIsCreatingNote(false);
  }

  return (
    
    <div className="App">
      <NavBar/>
      {isCreatingNote ? (
        <CreateNoteForm
          isVisible={isCreatingNote}
          handleAddNote={handleAddNote}
          handleCancelCreateNote={handleCancelCreateNote}
        />
      ) : ( 
      <div className='create-button-block'>
        <button onClick={handleCreateNote}>Створити</button> 
      </div>
      )}
      <div>
        {notes.length > 0 && (
          <Note
            notes={notes}
            editingIndex={editingIndex}
            handleAddNote={handleAddNote}
            handleDeleteNote={handleDeleteNote}
            handleEdit={handleEdit}
            handleSaveEdit={handleSaveEdit}
            handleCancelEdit={handleCancelEdit}
          />
        )}
      </div>  
    </div>
  );
}


export default App;

