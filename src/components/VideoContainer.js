import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '../images/video.mp4'; // Import your video file
import './VideoContainer.css'; // Import custom CSS for styling

const VideoContainer = () => {
  const quote = "Good Food "; // Define your quote

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
