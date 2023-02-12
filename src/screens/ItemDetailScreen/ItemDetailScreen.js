import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const ItemDetailScreen = ({ navigation, route }) => {
	const product = route.params.item;
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				style={styles.buttonBack}
				onPress={() => navigation.goBack()}>
				<Text style={styles.textBack}>⬅ Go Back</Text>
			</TouchableOpacity>
			<Text style={styles.title}>{product.title}</Text>
			<Image style={styles.image} source={{ uri: product.img }} />
			<Text style={styles.description}>{product.description}</Text>
			<Text style={styles.price}>${product.price}</Text>
		</SafeAreaView>
	);
};
