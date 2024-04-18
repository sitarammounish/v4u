import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './wrapper.css'; // Import custom CSS for additional styling
import dining from '../images/dining.jpg'; // Import your restaurant image

const Wrapper = () => {
  return (
    <section className='wrapper-background'>
      <Container>
        <Row className='align-items-center'> 
            <img src={dining} alt='Restaurant' className='restaurant-image' />
        </Row>
      </Container>
    </section>
  );
};

export default Wrapper;

