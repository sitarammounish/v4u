import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import naan from "../images/naan.jpg"
import rice from "../images/rice.png"
import samosa from "../images/samosa.jpg"
import steak from "../images/steak.jpg"
import './itemgrid.css'; 

const GridWithReactBootstrap = () => {
  // Data for text and image content
  const gridData = [
    { text: 'Row 1 Text', imageSrc: naan },
    { text: 'Row 2 Text', imageSrc: rice },
    { text: 'Row 3 Text', imageSrc: samosa },
    { text: 'Row 4 Text', imageSrc: steak },
  ];

  return (
    <Container className="grid-container" style={{ backgroundColor: '#273b52' }}>
      {gridData.map((item, index) => (
        <Row key={index} className={index % 2 === 0 ? 'flex-row-reverse' : ''}>
          <Col xs={12} md={6}>
            <div className="grid-text">
              <p>{item.text}</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="grid-image">
              <img src={item.imageSrc} alt={item.text} className="img-fluid custom-image" />
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default GridWithReactBootstrap;
