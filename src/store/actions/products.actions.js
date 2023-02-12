import { productTypes } from "../types/products.types";

const { SELECT_PRODUCT, FILTER_PRODUCT } = productTypes;

export const selectProduct = (prod) => ({
	type: SELECT_PRODUCT,
	product: prod,
});

export const filterProduct = (name) => ({
	type: FILTER_PRODUCT,
	category: name,
});
