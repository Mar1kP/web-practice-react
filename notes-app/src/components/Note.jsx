import React, {useState} from 'react';
import '../styles/App.css';
import EditNote from './EditNote';

function Note({ notes, editingIndex, handleAddNote, handleDeleteNote, handleEdit, handleSaveEdit, handleCancelEdit  }) {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentText, setCurrentText] = useState('');

  function handleSubmit () {
    if (currentTitle.trim() !== '' || currentText.trim() !== '') {
      const newNote = {
        title: currentTitle,
        text: currentText,
      };
      handleAddNote(newNote);
      setCurrentTitle('');
      setCurrentText('');
    }
  };

  return (
    <div>
      <div className='note-box'>
        {notes.map((note, index) => (
          <div key={index}>
            {editingIndex === index ? (
              <EditNote
                note={note}
                index={index}
                handleSaveEdit={handleSaveEdit}
                handleCancelEdit={handleCancelEdit}
              />
            ) : (
              <div className="note-block">
                <div className="note-structure">
                  <div className="disp-center">
                    <h3>{note.title}</h3>
                  </div>
                  <div>
                    <p>{note.text}</p>
                  </div>
                </div>
                <div className="subbutton">
                  <div>  
                    <button onClick={() => handleEdit(index)}>Редагувати</button>
                  </div>
                  <div> 
                    <button onClick={() => handleDeleteNote(index)}>Видалити</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Note;