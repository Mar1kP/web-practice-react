import React, { useState } from 'react';

function CreateNoteForm({ isVisible, handleAddNote, handleCancelCreateNote }) {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentText, setCurrentText] = useState('');

  function handleSubmit() {
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
    <div className="edit-block-overlay">
      <div className="edit-block" style={{ display: isVisible ? 'block' : 'none' }}>
        <div className='edit-display-block'>
          <div>
            <input className='input-title'
              type="text"
              placeholder="Заголовок"
              value={currentTitle}
              onChange={(e) => setCurrentTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea className='input-text'
              placeholder="Основний текст"
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
            />
          </div>
          <div className='subbutton'>  
            <div>  
              <button onClick={handleSubmit}>Створити</button>
            </div>
            <div>  
              <button onClick={handleCancelCreateNote}>Відмінити</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNoteForm;