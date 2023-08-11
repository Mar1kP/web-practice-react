import React, {useState} from 'react';
import '../styles/App.css';

function EditNote({
    note,
    index,
    handleSaveEdit,
    handleCancelEdit, 
  }) {
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedText, setEditedText] = useState(note.text);
  
    function handleSave() {
      if (editedTitle.trim() !== '' || editedText.trim() !== '') {
        const editedNote = {
          title: editedTitle,
          text: editedText,
        };
        handleSaveEdit(index, editedNote);
      }
    };
  
    return (
      <div className="edit-block-overlay">
        <div className="edit-block"> 
          <div className='edit-display-block'>
            <div>
              <input className='input-title'
                type="text"
                placeholder="Заголовок"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </div>
            <div>
              <textarea className='input-text'
                placeholder="Основний текст"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            </div>
            <div className='subbutton'>  
              <div>  
              <button onClick={handleSave}>Зберегти</button>
              </div>
              <div>  
              <button onClick={handleCancelEdit}>Скасувати</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default EditNote;