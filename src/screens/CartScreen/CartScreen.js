import { useState } from "react";
import {
	Button,
	FlatList,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import uuid from "react-native-uuid";
import { CartItem } from "../../components";
import { CART } from "../../data/cart";
import { ORDERS } from "../../data/orders";
import { styles } from "./styles";

export const CartScreen = () => {
	const [cartItems, setCartItems] = useState(CART);

	const renderItem = ({ item }) => (
		<CartItem handleDelete={handleDelete} item={item} />
	);
	const keyExtractor = (item) => item.id;

	const handleDelete = (id) => {
		setCartItems(cartItems.filter((item) => item.id !== id));
	};

	const handleEmptyCart = () => {
		setCartItems([]);
	};

	const handleCreateOrder = () => {
		const newOrder = {
			id: uuid.v4(),
			date: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
			total: cartItems.reduce(
				(totalPrice, item) => totalPrice + item.price * item.quantity,
				0
			),
			items: cartItems.map((item) => item),
		};
		ORDERS.push(newOrder);
	};

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={cartItems}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				style={styles.list}
			/>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress={handleEmptyCart}
					style={styles.button}>
					<Text style={styles.buttonText}>Vaciar Carrito</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleCreateOrder}
					style={styles.button}>
					<Text style={styles.buttonText}>Terminar Compra</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};
