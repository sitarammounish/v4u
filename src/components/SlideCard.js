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
            <h1 className='color'>{title}</h1>
            <p>{desc}</p>
            <Button className='handlebutton' onClick={handleButtonClick}>View Itenary</Button>
          </Col>
          <Col md={6}>
            <Image src={cover} alt="#" className='imgWidth' />
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default SlideCard