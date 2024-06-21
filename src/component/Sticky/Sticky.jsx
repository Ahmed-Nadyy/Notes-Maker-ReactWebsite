import React from 'react'
import "./Sticky.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons' 

export default function Sticky(props) {
  // console.log(props.title);
  // let {title,body} =props.elm;
  // console.log(title);
  
  return (
    <>
          <div className="container ">
              <div>
                  <div className="col-md-6">
                      <div className="sticky-note">
                        <div className="sticky-top">
                          <h3>{props.StckyNote.title}</h3>
                          <div>
                          <FontAwesomeIcon icon={faTrash} className='mx-2 icon ' onClick={() => props.deleteSticky(props.index)} />
                          {/* <FontAwesomeIcon icon={faPenToSquare} className='icon'/>  */}
                          </div>
                          </div>

                          <hr />
                          <p>{props.StckyNote.body}</p>
                      </div>
                  </div>
              </div>
          </div>

    </>
  )
}
