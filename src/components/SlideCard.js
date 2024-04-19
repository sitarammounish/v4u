// Worked by Sitaram Mounish Talluri - 8885467

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import "../Css/SlideCard.css"



const SlideCard = ({ title, desc, cover }) => {
  const navigate = useNavigate();
  //handle the button click event
  const handleButtonClick = () => {
    navigate('/products');
  };
  return (
    <div>
      {/* This is just an each card in the slider */}
      <Container className='box' >
        {/* React - Bootstrap Container, Row and Col */}
        <Row >
          <Col md={6}>
            <h1 className='color'>{title}</h1>
            <p>{desc}</p>
            <Button className='handlebutton' onClick={handleButtonClick}>View Itenary</Button>
          </Col>
          <Col md={6}>
            {/* image of slide card */}
            <Image src={cover} alt="#" className='imgWidth' />
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default SlideCard