// Worked by Sitaram Mounish Talluri - 8885467
import React from 'react';
import {Container, Row } from 'react-bootstrap';
import '../Css/wrapper.css'; 
import dining from '../images/dining.jpg'; 

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

