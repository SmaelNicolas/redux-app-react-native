import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const OrderDetailScreen = ({ navigation, route }) => {
	const order = route.params.order;
	const deleteOrder = route.params.delete;

	const handleDelete = () => {
		navigation.goBack();
		deleteOrder;
	};

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				style={styles.buttonBack}
				onPress={() => navigation.goBack()}>
				<Text style={styles.textBack}>⬅ Go Back</Text>
			</TouchableOpacity>
			<Text style={styles.text}>ID: {order.id}</Text>
			<Text style={styles.text}>Date Created: {order.date}</Text>
			<Text style={styles.text}>
				Total Products: {order.items.length}
			</Text>
			<Text style={styles.text}>List of Products:</Text>
			{order.items.map((item) => (
				<Text style={styles.itemTitle}>{item.title}</Text>
			))}
			<Text style={styles.delete} onPress={handleDelete}>
				Delete
			</Text>
		</SafeAreaView>
	);
};
