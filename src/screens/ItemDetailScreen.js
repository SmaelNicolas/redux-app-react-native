import { Text, View } from "react-native";

export const ItemDetailScreen = ({ route }) => {
	const product = route.params.item;
	return (
		<View>
			<Text>{product.title}</Text>
		</View>
	);
};
