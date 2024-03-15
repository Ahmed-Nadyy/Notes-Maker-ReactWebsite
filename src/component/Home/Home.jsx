import React, { useEffect, useState } from 'react';
import "./Home.css";
import Sticky from '../Sticky/Sticky';
import AddButton from '../AddButton/AddButton';
import Sticky_Maker from '../Sticky-Maker/Sticky-Maker';

const Home = (props) => {
  const [Notes, setNotes] = useState([]);
  const [inputNotes, setInputNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = () => {
    setInputNotes(prevNotes => [...prevNotes, <Sticky_Maker key={Date.now()} />]);
  }

  const deleteInputField = (index) => {
    const updatedNotes = [...inputNotes];
    updatedNotes.splice(index, 1);
    setInputNotes(updatedNotes);
  }

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
      deleteInputField();
    }
  }, [title, body, Notes]);

  return (
    <div className="homebody">
      <div className="container">
        <div className="ContainerBody row">
          <div className='button-body col-lg-12 d-flex justify-content-center' onClick={addNote}><AddButton /></div>
          <div className="sticky-dash row">
            {inputNotes.map((elm, index) => (
              <Sticky_Maker AddNewSticky={AddNewSticky} deleteInputField={deleteInputField} index={index} key={index} inputNote={elm} />
            ))}

            {Notes.map((note, index) => (
              <Sticky key={index} StckyNote={note} deleteSticky={deleteSticky} index={index} />
            ))}


            {/* {Notes} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
