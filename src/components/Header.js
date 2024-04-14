import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import "./Header.css"
const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark py-3 sticky-top">
          <div className="container">
            <Link className="navbar-brand fw-bold fs-4 px-2" to="/"> Perfect Fit</Link>
            <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto my-2 text-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;