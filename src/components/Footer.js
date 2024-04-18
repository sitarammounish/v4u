import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import logo from "../images/logo1.png"

const Footer = () => {
  return (
    <div >
        <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>The Perfect Date</h1>
              </div>
              
              <img src={logo} alt="Logo" className="navbar-brand-img" style={{ width: '75px', height: 'auto' }}/>
              <p>Where moments become cherished memories </p>
            </Col>
           
            <Col md={3} sm={5} className='box'>
           
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Franchises</li>
                <li> Know your Ingredients</li>
      
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li> Support Center </li>
                <li>How To Order</li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
              
                <li>Email: stalluri5467@conestogac.on.ca</li>
                <li>Phone: +1 424 242 4242</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
    </div>
  )
}

export default Footer