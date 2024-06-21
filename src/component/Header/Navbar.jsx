import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

export default class Navbar extends Component {
    render() {
        return (
            <>
              
                <nav className="navbarBody navbar navbar-expand-lg " >
                   
                    <div className="container">

                        <div className="collapse navbar-collapse" id="navbarButtonsExample">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white fs-3 m-0 p-1 fw-bold" href="#" to="/">Notes</NavLink>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center">
                                <button data-mdb-ripple-init type="button" className=" btn  text-white px-3 me-2">
                                    <NavLink to="/login" className="text-white text-decoration-none" >Login</NavLink>
                                </button>
                                <button data-mdb-ripple-init type="button" className="btn me-2">
                                  <NavLink to="/register" className="text-white text-decoration-none">Register</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

            </>
        )
    }
}
