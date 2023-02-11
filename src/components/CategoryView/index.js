import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const CategoryView = ({ item, onPressed }) => {
	return (
		<View>
			<TouchableOpacity onPress={() => onPressed(item)}>
				<Text>{item.name}</Text>
			</TouchableOpacity>
		</View>
	);
};
