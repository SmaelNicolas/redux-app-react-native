import { categoryTypes } from "../types/category.types";

const { SELECT_CATEGORY } = categoryTypes;

export const selectCategory = (category) => ({
	type: SELECT_CATEGORY,
	categorySelected: category,
});
