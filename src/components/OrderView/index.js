import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const OrderView = ({ order, handlePress, handleDelete }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.detailText}>ID: {order.id}</Text>
			<View style={styles.detailContainer}>
				<Text style={styles.detailText}>Total: ${order.total}</Text>
				<Text style={styles.detailText}>Created: {order.date}</Text>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => handlePress(order)}>
					<Text style={styles.detailButton}>Details</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => handleDelete(order.id)}>
					<Text style={styles.detailButton}>Delete</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};
