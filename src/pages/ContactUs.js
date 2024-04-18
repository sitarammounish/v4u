import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import mapImage from "../images/map.gif";
import bannerImage from "../images/contactus.jpg"; 
import "./contact.css";
const ContactUs = () => {
  return (
    <div>
      {/* Banner */}
      <img class="contact" src={bannerImage} alt="Banner" style={{ width: "100%", height: "auto" }} />

      {/* Contact Us section */}
      <div style={{ marginTop: "50px", color: "#273b52" }}>
        {/* Container section */}
        <Container>
          <Row className="mt-4">
            <Col md={6}>
              <h2>Contact Us</h2>
              <hr></hr>
              <p>
                Have a question or feedback? Feel free to reach out to us using
                the form below. We'd love to hear from you!
              </p>
              {/* Form section */}
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <br></br>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <br></br>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                  />
                </Form.Group>
                <br></br>
                <Button style={{ marginRight: "10px" , boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }} class="submitbutton" variant="primary" type="submit">
                  Submit
                </Button> 
                <Button style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }} class="cancelbutton" variant="danger" >
                  Cancel
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <h2>Location</h2>
              <hr></hr>
              <p>
                Visit us at our location:
              </p>
              <img
                src={mapImage}
                alt="Map"
                style={{ width: "90%", height: "auto" ,position:"center"}}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
