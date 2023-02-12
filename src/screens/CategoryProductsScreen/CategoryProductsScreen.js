import { FlatList, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { ProductView } from "../../components";
import { productList } from "../../data/productList";
import { styles } from "./styles";

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
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				style={styles.buttonBack}
				onPress={() => navigation.goBack()}>
				<Text style={styles.textBack}>⬅ Go Back</Text>
			</TouchableOpacity>
			<FlatList
				data={productList}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
			/>
		</SafeAreaView>
	);
};
