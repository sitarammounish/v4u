import React from "react";
import { Col } from "react-bootstrap";
import "./ProductCard.css";

const ProductCard = ({ productItem }) => {
	return (
		<Col md={3} sm={5} xs={10} className="product mtop">
			<img loading="lazy" src={productItem.imgUrl} alt="" />
			<div className="product-like">
				<ion-icon name="heart-outline"></ion-icon>
			</div>
			<div className="product-details">
				<h4 style={{ color: "#273b52" }}>{productItem.productName}</h4>

				<div className="rate">
					<i className="fa fa-star">{productItem.avgRating}</i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
				</div>
				<div className="price">
					<h4 style={{ color: "#273b52" }}>${productItem.price}</h4>
				</div>
			</div>
		</Col>
	);
};

export default ProductCard;
