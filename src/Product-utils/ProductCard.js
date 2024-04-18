import React from "react";
import { Col } from "react-bootstrap";
import "./ProductCard.css";

const ProductCard = ({ productItem }) => {
	return (
		// Column layout for product card with specified widths for different screen sizes
		<Col md={3} sm={5} xs={10} className="product mtop">
			{/* Product image */}
			<img loading="lazy" src={productItem.imgUrl} alt="" />
			{/* Heart icon for liking the product */}
			<div className="product-like">
				<ion-icon name="heart-outline"></ion-icon>
			</div>
			{/* Product details */}
			<div className="product-details">
				{/* Product name */}
				<h4 style={{ color: "#273b52" }}>{productItem.productName}</h4>

				{/* Product rating */}

				<div className="rate">
					<i className="fa fa-star">{productItem.avgRating}</i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
				</div>

				{/* Product price */}
				<div className="price">
					<h4 style={{ color: "#273b52" }}>${productItem.price}</h4>
				</div>
			</div>
		</Col>
	);
};

export default ProductCard;
