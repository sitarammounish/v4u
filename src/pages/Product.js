import { Fragment, useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ProductList from "../Product-utils/ProductList";
import UniqueProduct from "../Product-utils/UniqueProduct";
import { products } from "../utils/productsUtils";
import "./product.css";
import image1 from "../images/assorted-spices-near-chicken-kebab.jpg";
import image2 from "../images/rice.png";
import image3 from "../images/naan.jpg";

const Products = () => {
	const [filterList] = useState(products);
	const [backgroundImage, setBackgroundImage] = useState("");
	const backgroundImages = [image1, image2, image3];

	useEffect(() => {
		const changeBackgroundImage = () => {
			const randomIndex = Math.floor(Math.random() * backgroundImages.length);
			setBackgroundImage(backgroundImages[randomIndex]);
		};
		const intervalId = setInterval(changeBackgroundImage, 2000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<Fragment>
			<h1
				className="menu-heading"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				Menu
			</h1>

			<section className="filter-bar">
				<Container className="filter-bar-container">
					<Row className="justify-content-center">
						<Col md={4}></Col>
						<Col md={8}></Col>
					</Row>
				</Container>
				<Container>
					<ProductList productItems={filterList} />
				</Container>
				<Container>
					<UniqueProduct />
				</Container>
			</section>
		</Fragment>
	);
};

export default Products;
