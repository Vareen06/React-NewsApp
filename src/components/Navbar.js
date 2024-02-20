//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  //static propTypes = {}

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-Link active" aria-current="page" to="/general">Home</Link>
                </li>
                <li><Link className="nav-Link mx-2" to="/business">Business</Link></li>
                <li><Link className="nav-Link mx-2" to="/entertainment">Entertainment</Link></li>
                <li><Link className="nav-Link mx-2" to="/general">General</Link></li>
                <li><Link className="nav-Link mx-2" to="/science">Science</Link></li>
                <li><Link className="nav-Link mx-2" to="/sports">Sports</Link></li>
                <li><Link className="nav-Link mx-2" to="/technology">Technology</Link></li>
              </ul>
            </div>
            <nav className="navbar bg-body-tertiary navbar-dark bg-dark">
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar