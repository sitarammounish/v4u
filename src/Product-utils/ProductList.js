import React from "react";
import { memo, useEffect } from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

// ProductList component
const ProductList = ({ productItems }) => {
	// useEffect hook with an empty dependency array, indicating it runs once on component mount
	useEffect(() => {}, [productItems]);
	// Checking if productItems array is empty, if so, rendering a message
	if (productItems.length === 0) {
		return <h1 className="not-found">Product Not Found !!</h1>;
	}
	// Rendering a Row component from react-bootstrap with ProductCard components inside
	return (
		<Row className="justify-content-center">
			{productItems.map((productItem) => {
				return (
					<ProductCard
						key={productItem.id}
						title={null}
						productItem={productItem}
					/>
				);
			})}
		</Row>
	);
};
export default memo(ProductList);
