import { FlatList, Image, SafeAreaView } from "react-native";
import { CategoryView } from "../../components";
import { categoryList } from "../../data/categories";
import { styles } from "./styles";

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
		<SafeAreaView style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: "https://i.ibb.co/r2vcM4H/logo.png" }}
			/>
			<FlatList
				data={categoryList}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
			/>
		</SafeAreaView>
	);
};
