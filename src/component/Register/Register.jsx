import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Register extends Component {
  render() {
    return (
      <>
      <div className="gradient-custom">
        <section className="container p-5 " >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="loginClass card text-white" style={{ borderRadius: 15 }}>
                    <div className="card-body p-5 text-center">
                      <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                      <form>
                        <div className="form-outline mb-4">
                          <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example4cg">Password</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                          <label className="form-check-label" htmlFor="form2Example3g">
                            I agree all statements in <a href="#!" className="text-gray"><u>Terms of service</u></a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center">
                        <NavLink to="/" className="text-decoration-none text-white"><button className="btn btn-outline-light btn-lg px-5 m-1" type="submit"> Back</button></NavLink>
                          <button type="button" className="btn btn-outline-light btn-lg px-5 m-1">Register</button>
                        </div>
                        <p className="text-center  mt-5 mb-0 " >Have already an account? <a href="#!" className="fw-bold"><u>Login here</u></a></p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </>
    )
  }
}
