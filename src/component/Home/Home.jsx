import React, { useEffect, useState, useCallback } from 'react';
import "./Home.css";
import Sticky from '../Sticky/Sticky';
import AddButton from '../AddButton/AddButton';
import StickyMaker from '../Sticky-Maker/StickyMaker';

const Home = (props) => {
  const [Notes, setNotes] = useState([]);
  const [inputNotes, setInputNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = () => {
    setInputNotes(prevNotes => [...prevNotes, <StickyMaker key={Date.now()} />]);
  }

  const deleteInputField = useCallback((index) => {
    const updatedNotes = [...inputNotes];
    updatedNotes.splice(index, 1);
    setInputNotes(updatedNotes);
  }, [inputNotes]);

  const deleteSticky = (index) => {
    const updatedNewNotes = [...Notes];
    updatedNewNotes.splice(index, 1);
    setNotes(updatedNewNotes);
  }

  const AddNewSticky = (title, body) => {
    setTitle(title);
    setBody(body);
  };

  useEffect(() => {
    if (title || body) {
      setNotes(prevNotes => [...prevNotes, { title, body }]);
      setTitle("");
      setBody("");
      // Call deleteInputField with a proper index if needed
      // deleteInputField(index); // You need to determine which index to use here
    }
  }, [title, body, deleteInputField]);

  return (
    <div className="homebody">
      <div className="container">
        <div className="ContainerBody row">
          <div className='button-body col-lg-12 d-flex justify-content-center' onClick={addNote}><AddButton /></div>
          <div className="sticky-dash row">
            {inputNotes.map((elm, index) => (
              <StickyMaker AddNewSticky={AddNewSticky} deleteInputField={() => deleteInputField(index)} index={index} key={index} inputNote={elm} />
            ))}

            {Notes.map((note, index) => (
              <Sticky key={index} StckyNote={note} deleteSticky={() => deleteSticky(index)} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
