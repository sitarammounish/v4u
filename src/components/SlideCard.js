import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import "./SlideCard.css"



const SlideCard = ({ title, desc, cover }) => {
  const navigate = useNavigate();
  //handle the button click event
  const handleButtonClick = () => {
    navigate('/products');
  };
  return (
    <div>
      <Container className='box' >
        <Row >
          <Col md={6}>
            <h1 style={{ color: '#273b52' }}>{title}</h1>
            <p>{desc}</p>
            <Button style={{ backgroundColor: '#273b52' }} onClick={handleButtonClick}>Visit Collections</Button>
          </Col>
          <Col md={6}>
            <Image src={cover} alt="#" style={{ width: '100%' }} />
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default SlideCard