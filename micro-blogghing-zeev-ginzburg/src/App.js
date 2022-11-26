import './App.css';
import Notes from './components/notes';
import Form from './components/form';
import { useState } from "react";

function App() {
  const [noteItems, setNoteItems] = useState([]);
  const [opened, setOpened] = useState(null);
  const addNewNote = (newNoteItem) => {
    setNoteItems([...noteItems, newNoteItem]);
  }

  const deleteNote = (noteToDelete) => {
    setNoteItems(noteItems.filter((note) => {
      if (note === noteToDelete) {
        return false;
      }
      else return true;
    }));
  }

  const openNote = (noteToOpen) => {
    setOpened(noteToOpen);
  }

  const modal = () => {
    if (opened) {
      return (
        <div className={`modal`}>
          <div className='modal-content'>
            <div className='header'>
              <h2>{opened.title}</h2>
              <button onClick={() => { setOpened(null) }}>x</button>
            </div>
            <p>{opened.text}</p>
            {/* <p>{`note date: ${humanReadebleDate(note.date)}`}</p> */}
          </div>
      </div>
      )
    }
  }

  return (
    <div className="App">
      <Form addNewNote={addNewNote} />
      <Notes noteItems={noteItems} deleteNote={deleteNote} openNote={openNote}/>
      {modal()}
    </div>
  );
}

export default App;