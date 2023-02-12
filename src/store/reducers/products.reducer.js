import { productList } from "../../data/productList";
import { productTypes } from "../types/products.types";

const { FILTER_PRODUCT, SELECT_PRODUCT } = productTypes;

const initialState = {
	products: productList,
	filteredProducts: [],
	selected: null,
};

export const ProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_PRODUCT: {
			const selectedProd = state.products.find(
				(prod) => prod.id === action.product.id
			);
			return {
				...state,
				selected: selectedProd,
			};
		}
		case FILTER_PRODUCT: {
			const filteredProds = state.products.filter(
				(prod) => prod.category === action.category
			);
			return {
				...state,
				filteredProducts: filteredProds,
			};
		}
		default:
			return state;
	}
};
