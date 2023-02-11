import { Button, Text, TouchableOpacity, View } from "react-native";

export const CartItem = ({ handleDelete, item }) => {
	return (
		<View>
			<Text>{item.title}</Text>
			<TouchableOpacity onPress={() => handleDelete(item.id)}>
				<Text>Eliminar</Text>
			</TouchableOpacity>
		</View>
	);
};
