import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const CategoryView = ({ item, onPressed }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={() => onPressed(item)}>
			<Text style={styles.text}>{item.name}</Text>
		</TouchableOpacity>
	);
};
