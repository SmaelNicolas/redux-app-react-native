import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { CartItem } from "../components/CartItem";
import { CART } from "../data/cart";

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

	return (
		<View>
			<Button title="Vaciar Carrito" onPress={handleEmptyCart} />
			<Button title="Terminar Compra" />
			<FlatList
				data={cartItems}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
			/>
		</View>
	);
};
