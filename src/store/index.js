import { combineReducers, createStore } from "redux";
import { CategoryReducer } from "./reducers/category.reducer";
import { ProductReducer } from "./reducers/products.reducer";

const RootReducer = combineReducers({
	productsRoot: ProductReducer,
	categoriesRoot: CategoryReducer,
});

export default createStore(RootReducer);
