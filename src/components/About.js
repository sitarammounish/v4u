import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import about from "../images/about_us.jpg";
import aboutus from "../images/about.png";
import buffet2 from "../images/buffet2.jpg";
import buffet4 from "../images/buffet4.jpg";
import naan from "../images/naan.jpg";
import livecounter from "../images/livecounter.jpg";
import varied from "../images/varied.png";
import aboutbuffet1 from "../images/about_bufffet1.jpeg";
import thali from "../images/thali.png";

import "./About.css";

const About = () => {
  return (
    <div style={{ marginTop: "50px", color: "#273b52" }}>
      <Container>
        <Row className="mt-4">
          <Col md={12}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={about}
                  alt="First slide"
                  style={{ height: "500px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>Delicious Spread</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={naan}
                  alt="Second slide"
                  style={{ height: "500px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>Fresh Ingredients</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={varied}
                  alt="Third slide"
                  style={{ height: "500px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>Varied Selection</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <div style={{ marginTop: "50px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            <div>
              <img
                src={aboutus}
                alt="about us"
                style={{ width: "100%", height: "530px" }}
              />
            </div>
            <div style={{ textAlign: "center", margin: "auto" }}>
              <h2>About Us</h2>
              <br></br>
              <p>
                Welcome to our restaurant, where we are dedicated to providing a
                delightful dining experience that tantalizes your taste buds and
                soothes your soul. Nestled in the heart of{" "}
                <b> Kitchener Downtown</b>, our restaurant offers a cozy
                ambiance and a menu filled with delectable dishes inspired by{" "}
                <b>Indian cuisine</b>.
              </p>
              <p>
                Our culinary team meticulously crafts each dish using only the{" "}
                <b>finest, locally-sourced ingredients </b> to ensure{" "}
                <b>freshness and flavor</b> in every bite. From traditional
                favorites to innovative creations, our menu has something to{" "}
                <b>satisfy every palate </b>.
              </p>
              <p>
                Join us for a memorable dining experience filled with warmth,
                flavor, and hospitality. Whether you're celebrating a special
                occasion or simply craving a delicious meal, we look forward to
                welcoming you to our restaurant and creating cherished moments
                together.
              </p>
            </div>
            {/* First Item */}
            <div style={{ textAlign: "center", margin: "auto" }}>
              <h2>Our Franchises</h2>
              <br></br>
              <p>
                Are you passionate about food and hospitality? Consider joining
                our franchise family and embark on an exciting journey as a
                restaurateur.
              </p>
              <p>
                As a franchisee, you'll benefit from our established brand
                reputation, comprehensive training programs, and ongoing support
                to help you succeed. Whether you're a seasoned entrepreneur or a
                first-time business owner, our franchise model provides the
                resources and guidance you need to thrive in the competitive
                restaurant industry.
              </p>
              <p>
                Join us in sharing our love for great food, exceptional service,
                and unforgettable dining experiences. Together, we can build a
                successful and rewarding future as part of the our family.
              </p>
              <p>
                For more information on franchise opportunities, please contact
                us at franchise@perfectdate.com or call +1-(437)-477-1605
              </p>
            </div>
            <div>
              <img
                src={buffet2}
                alt="Item 1"
                style={{ width: "100%", height: "530px" }}
              />
            </div>

            {/* Second Item */}

            <div>
              <img
                src={buffet4}
                alt="Item 2"
                style={{ width: "100%", height: "530px" }}
              />
            </div>
            <div style={{ textAlign: "center", margin: "auto" }}>
              <h2>Know Your Ingredients</h2>
              <br></br>
              <p>
                At The Perfect Date, we prioritize quality ingredients to create
                delicious dishes. We carefully select each ingredient for its
                freshness, flavor, and nutritional value.
              </p>
              <p>
                Our menu features a variety of locally sourced produce, premium
                meats, and authentic spices. We believe in transparency and are
                committed to providing information about the ingredients we use
                in our recipes.
              </p>
              <p>
                Explore our menu to discover the flavorful ingredients that make
                our dishes unique.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <hr />
      <Container>
        <Row className="mt-4">
          <Col md={12}>
            <h2>Explore Our Buffet</h2>
            <br></br>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={aboutbuffet1}
                  alt="First slide"
                  style={{ height: "450px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>North Indian & South Indian Cuisine</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={livecounter}
                  alt="Second slide"
                  style={{ height: "450px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>Dosa Live Counter</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={thali}
                  alt="Third slide"
                  style={{ height: "450px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>Our Signature Rajthani Thali</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className="mt-4">
          <Col md={12}>
            <h2>Our Commitment to Excellence</h2>
            <br></br>
            <p>
              At our restaurant, we are committed to excellence in every aspect
              of our operation. From our attentive service to our exceptional
              cuisine, we strive to exceed your expectations and provide a
              dining experience that is second to none.
            </p>
            <p>
              We take pride in our attention to detail and our dedication to
              quality. Whether you're joining us for lunch, dinner, or a special
              event, you can trust that every dish is prepared with care and
              served with a smile.
            </p>
            <p>
              Thank you for choosing our restaurant. We look forward to serving
              you and creating memorable moments that you'll cherish for years
              to come.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
