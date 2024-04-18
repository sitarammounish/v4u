import React from "react";
import { memo, useEffect } from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({ productItems }) => {
	useEffect(() => {}, [productItems]);
	if (productItems.length === 0) {
		return <h1 className="not-found">Product Not Found !!</h1>;
	}
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
