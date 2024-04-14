import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import about from "../images/about_us.jpg"
import "./About.css"

const About = () => {
    return (
        <div style={{ marginTop: '50px', color: '#273b52' }} >
            <Container>
                <Row>
                    <h2>About Us</h2>
                    <Col md={6}>
                        <img
                            src={about}
                            alt="Company Office"
                            style={{ width: '100%', height: '400px' }}
                        />
                    </Col>
                    <Col md={6}>
                        <p>
                            Welcome to our online store, where we are dedicated to bringing you a seamless and delightful online shopping experience. Our mission is to curate a diverse selection of high-quality products, ensuring that you find exactly what you're looking for to enhance your lifestyle.
                        </p>
                        <p>
                            At our store, we believe in the power of choice, quality, and convenience. Our team works tirelessly to source products that combine the latest trends with enduring style, all while maintaining competitive prices. We are committed to providing personalized service, ensuring that every purchase reflects your unique preferences and needs.
                        </p>
                        <p>
                            Join us on this journey of discovery, where shopping transcends the ordinary. Thank you for choosing Online cloth store, where your satisfaction is our priority.
                        </p>
                        <p>
                            Our dedicated team of professionals is committed to seamless and delightful online shopping experience  that meet and exceed the expectations of our valued customers. We continuously strive for excellence, embracing  to stay ahead in the dynamic online industry.
                        </p>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Row className="mt-4">
                    <Col md={6}>
                        <div className="contact-person">
                            <h4>Contact Person 1</h4>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="contact-details">
                                    <p>Full Name: Krishna Pandya</p>
                                    <p>8845460</p>
                                    <p>Email: kpandya5460@conestogac.on.ca</p>
                                    <p>Group: 1</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-person">
                            <h4>Contact Person 2</h4>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="contact-details">
                                    <p>Full Name: Darshan Mepani</p>
                                    <p>8844026</p>
                                    <p>Email: dmepani4026@conestogac.on.ca</p>
                                    <p>Group: 1</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default About