import { useEffect } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ProductView } from "../../components";
import {
	filterProduct,
	selectProduct,
} from "../../store/actions/products.actions";
import { styles } from "./styles";

export const CategoryProductsScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const categorySelected = useSelector(
		(state) => state.categoriesRoot.selected
	);
	const filteredProds = useSelector(
		(state) => state.productsRoot.filteredProducts
	);
	useEffect(() => {
		dispatch(filterProduct(categorySelected.name));
	}, []);

	const onPressed = (item) => {
		dispatch(selectProduct(item));
		navigation.navigate("Detail");
	};
	const renderItem = ({ item }) => (
		<ProductView item={item} onPressed={onPressed} />
	);
	const keyExtractor = (item) => item.id;

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				style={styles.buttonBack}
				onPress={() => navigation.goBack()}>
				<Text style={styles.textBack}>⬅ Go Back</Text>
			</TouchableOpacity>
			<FlatList
				data={filteredProds}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
			/>
		</SafeAreaView>
	);
};
