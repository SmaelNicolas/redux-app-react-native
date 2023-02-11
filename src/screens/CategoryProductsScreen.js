import { Button, FlatList, Text, View } from "react-native";
import { ProductView } from "../components";
import { productList } from "../data/productList";

export const CategoryProductsScreen = ({ navigation, route }) => {
	let cat = route.params.name;
	const onPressed = (item) => {
		navigation.navigate("Detail", {
			item,
			title: item.title,
		});
	};
	const renderItem = ({ item }) =>
		item.category.toLowerCase() === cat.toLowerCase() && (
			<ProductView item={item} onPressed={onPressed} />
		);
	const keyExtractor = (item) => item.id;

	return (
		<FlatList
			data={productList}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
		/>
	);
};
