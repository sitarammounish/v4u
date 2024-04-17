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