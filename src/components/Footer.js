import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <div style={{marginTop:'30px'}}>
        <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Perfect Fit</h1>
              </div>
              <p>160 University Ave,Waterloo, ON N2L3T9, Canada</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>160 University Ave,Waterloo, ON N2L3T9, Canada </li>
                <li>Email: kpandya5460@conestogac.on.ca</li>
                <li>Phone: +1 1123 456 780</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
    </div>
  )
}

export default Footer