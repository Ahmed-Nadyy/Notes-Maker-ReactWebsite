import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import "./Navbar.css"

export default function Header() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-body" >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><h4>MyMovie</h4></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
           

            <form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              {/* <button className="btn btn-outline-success mx-3" type="submit">Search</button> */}
              <Link to="/register"><button className="btn btn-outline-success " type="submit">Register</button></Link>

            </form>
          </div>
        </div>
      </nav>

    </>
  )
}
