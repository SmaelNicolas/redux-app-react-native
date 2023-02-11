import { FlatList } from "react-native";
import { CategoryView } from "../components";
import { categoryList } from "../data/categories";

export const CategoriesScreen = ({ navigation }) => {
	const onPressed = ({ name }) => {
		navigation.navigate("Products", {
			name,
		});
	};

	const keyExtractor = (item) => item.id;
	const renderItem = ({ item }) => (
		<CategoryView item={item} onPressed={onPressed} />
	);
	return (
		<FlatList
			data={categoryList}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
		/>
	);
};
