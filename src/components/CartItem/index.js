import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const CartItem = ({ handleDelete, item }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>{item.title}</Text>
			<View style={styles.containerPrice}>
				<Text style={styles.text}>{item.quantity} x </Text>
				<Text style={styles.text}> ${item.price}</Text>
			</View>
			<Text style={styles.total}>
				Total = {item.price * item.quantity}
			</Text>
			<TouchableOpacity
				style={styles.delete}
				onPress={() => handleDelete(item.id)}>
				<Text style={styles.deleteText}>Eliminar</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
