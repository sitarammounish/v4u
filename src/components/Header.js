import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import "./Header.css"
import logo from "../images/logo1.png"
const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark py-3 sticky-top">
          <div className="container">
          <img src={logo} alt="Logo" className="navbar-brand-img" style={{ width: '150px', height: 'auto' }}/>

            <Link className="navbar-brand fw-bold fs-4 px-2" to="/">The Perfect Dine</Link>
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
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
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