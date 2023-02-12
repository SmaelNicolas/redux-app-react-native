import { FlatList, Image, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CategoryView } from "../../components";
import { selectCategory } from "../../store/actions/category.actions";
import { styles } from "./styles";

export const CategoriesScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const categories = useSelector((state) => state.categoriesRoot.categories);
	const onPressed = (item) => {
		dispatch(selectCategory(item));
		navigation.navigate("Products");
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
				data={categories}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
			/>
		</SafeAreaView>
	);
};
