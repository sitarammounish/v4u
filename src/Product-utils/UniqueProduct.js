import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { products } from "../utils/productsUtils";
import uniqueProductImage from "../images/unique-product.png";

const UniqueProduct = () => {
	const uniqueProduct = products.find((product) => product.id === "02");

	return (
		<div className="bg-light pb-7 lg:pb-0" style={{ marginTop: "50px" }}>
			<Container fluid>
				<strong>
					<h3 style={{ color: "#273b52" }}>Featured Dish</h3>
				</strong>
				<Row className="justify-content-center">
					<Col md={6} className="text-center">
						<Image
							src={uniqueProductImage}
							alt="dish"
							className="w-100 mb-4"
							style={{ height: "650px" }}
						/>
					</Col>
					<Col md={6} style={{ color: "#273b52" }} className="ml-2">
						<strong>
							<h3 className="text-navy-blue text-4xl font-bold mb-4">
								Spicy Chicken Curry
							</h3>
							<h4>Price: ${uniqueProduct.price}</h4>
						</strong>
						<div>
							<h3>Dish Details</h3>
							<p>
								<strong>Ingredients:</strong>&nbsp;&nbsp;Chicken, Spices,
								Tomatoes, Onions
							</p>
							<p>
								<strong>Spice Level:</strong>&nbsp;&nbsp;Medium
							</p>
							<p>
								<strong>Serving Size:</strong>&nbsp;&nbsp;2-3 people
							</p>
							<p>
								<strong>Cuisine:</strong>&nbsp;&nbsp;Indian
							</p>
						</div>
						<hr />
						<div>
							<h2>About this Dish</h2>
							<p>
								<strong>Flavor Profile:</strong> This spicy chicken curry bursts
								with flavors of aromatic spices and tangy tomatoes. It's a
								perfect blend of heat and richness.
							</p>
							<p>
								<strong>Recommended Pairing:</strong> Serve with steamed rice or
								naan bread for a complete and satisfying meal.
							</p>
						</div>
						<div className="mt-4 d-flex align-items-center">
							<Button
								style={{
									backgroundColor: "#000000",
									fontFamily: "Rouge Script",
								}}
								className="mr-4"
							>
								Order Now
							</Button>
							<div className="flex flex-col">
								<Link to={`/product-details/${uniqueProduct.id}`}>
									<p className="text-14 font-semibold text-navy-blue">
										{uniqueProduct.title}
									</p>
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default UniqueProduct;
