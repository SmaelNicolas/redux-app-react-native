import { categoryList } from "../../data/categories";
import { categoryTypes } from "../types/category.types";

const { SELECT_CATEGORY } = categoryTypes;

const initialState = {
	categories: categoryList,
	selected: null,
};

export const CategoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_CATEGORY:
			const cat = state.categories.find(
				(category) => category.id === action.categorySelected.id
			);
			if (!cat) return state;
			return {
				...state,
				selected: cat,
			};
		default:
			return state;
	}
};
