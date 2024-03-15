import React from 'react'
import "./AddButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons' 

export default function AddButton() {
  return (
    <>
      <div className="btn btn-body text-white" > <FontAwesomeIcon icon={faPlus} className='p-1 fs-5 rounded border'/> Add New</div>
    </>
  )
}
