import React, { useState } from 'react';
import "./Sticky-Maker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Removed faPenToSquare as it's not used in this example

export default function Sticky(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleInput = (event) => {
    setTitle(event.target.value);
    // console.log(title);
  };

  const handleBodyInput = (event) => {
    setBody(event.target.value);
    // console.log(body);
  };

  const saveNote = () => {
    props.AddNewSticky(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <div className='sticky-note-container col-lg-3'>
      <div className="sticky-note-input">
        <div className="sticky-top">
          <input type="text" className="form-control form-control-md w-50" value={title} onChange={handleTitleInput} />
          <label className="form-label text-bold fw-bold">Title</label>
          <FontAwesomeIcon icon={faTrash} className='mx-2 icon' onClick={() => props.deleteInputField(props.index)} />
        </div>
        <hr />
        <input type="text" className="form-control form-control-md w-100" value={body} onChange={handleBodyInput} />
        <button className="btn btn-outline-dark btn-md px-3 mt-2" onClick={saveNote}>Save</button>
      </div>
    </div>
  );
}
