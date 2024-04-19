// Worked by Sitaram Mounish Talluri - 8885467
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '../images/video.mp4'; 
import '../Css/VideoContainer.css'; 

const VideoContainer = () => {
  const quote = "Delightful Experience, with World Class Dining"; 

  return (
    <Container className="video-container">
      <Row>
        <Col>
          <div className="video-wrapper">
            <video controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="quote-container">
            <p className="quote-text">{quote}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoContainer;
