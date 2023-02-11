import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const ProductView = ({ item, onPressed }) => {
	return (
		<View>
			<TouchableOpacity onPress={() => onPressed(item)}>
				<Text>{item.title}</Text>
			</TouchableOpacity>
		</View>
	);
};
