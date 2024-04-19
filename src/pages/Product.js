// Worked by Hiral Barot - 8827697
import { Fragment, useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ProductList from "../Product-utils/ProductList";
import UniqueProduct from "../Product-utils/UniqueProduct";
import { products } from "../utils/productsUtils";
import "../Css/product.css";
import image1 from "../images/assorted-spices-near-chicken-kebab.jpg";
import image2 from "../images/rice.png";
import image3 from "../images/naan.jpg";

const backgroundImages = [image1, image2, image3];

const Products = () => {
	// State variables for filterList and backgroundImage
	const [filterList] = useState(products);
	const [backgroundImage, setBackgroundImage] = useState("");
	
	// useEffect hook to change background image at intervals
	useEffect(() => {
		const changeBackgroundImage = () => {
			const randomIndex = Math.floor(Math.random() * backgroundImages.length);
			setBackgroundImage(backgroundImages[randomIndex]);
		};
		const intervalId = setInterval(changeBackgroundImage, 2000); // Changing background image every 2 seconds
		return () => clearInterval(intervalId); // Clearing interval on component unmount
	}, []);
	// Rendering the Products component
	return (
		<Fragment>
			{/* Heading for the menu with dynamic background image */}
			<h1
				className="menu-heading"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				Menu
			</h1>
			{/* Section for filter bar and product lists */}
			<section className="filter-bar">
				<Container className="filter-bar-container">
					<Row className="justify-content-center">
						<Col md={4}></Col>
						<Col md={8}></Col>
					</Row>
				</Container>
				{/* Container for displaying ProductList component */}
				<Container>
					<ProductList productItems={filterList} />
				</Container>
				{/* Container for displaying UniqueProduct component */}
				<Container>
					<UniqueProduct />
				</Container>
			</section>
		</Fragment>
	);
};

export default Products;
