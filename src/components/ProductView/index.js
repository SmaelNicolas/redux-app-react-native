import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const ProductView = ({ item, onPressed }) => {
	return (
		<View style={styles.container}>
			<View style={styles.containerInfo}>
				<View>
					<Text style={styles.text}>{item.title}</Text>
					<Text style={styles.text}>Price: ${item.price}</Text>
				</View>
				<Image style={styles.image} source={{ uri: item.img }} />
			</View>
			<View style={styles.containerButtons}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onPressed(item)}>
					<Text style={styles.textButton}>Details</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.textButton}>Buy</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
