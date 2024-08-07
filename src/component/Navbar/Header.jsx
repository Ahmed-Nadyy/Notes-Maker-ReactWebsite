import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export default function Header() {

  return (
    <>
      <nav className="navbarBody navbar navbar-expand-lg navbar-dark " >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><h4>Notes</h4></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
            </ul>
           

            <form className="d-flex" role="search">
              <Link to="/login"><button className="btn btn-outline-success mx-3" type="submit">Login</button></Link>
              <Link to="/register"><button className="btn btn-outline-success " type="submit">Register</button></Link>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}
