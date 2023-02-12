import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { OrderView } from "../../components";
import { ORDERS } from "../../data/orders";
import { styles } from "./styles";

export const OrderScreen = ({ navigation }) => {
	const [orderList, setOrderList] = useState(ORDERS);

	const keyExtractor = (item) => item.id;

	const renderItem = ({ item }) => (
		<OrderView
			order={item}
			handlePress={handlePress}
			handleDelete={handleDelete}
		/>
	);

	const handlePress = (order) => {
		navigation.navigate("Orden Detail", {
			order,
			title: `Order ${order.id.toString()}`,
			delete: handleDelete(order.id),
		});
	};

	const handleDelete = (id) => {
		setOrderList(orderList.filter((order) => id !== order.id));
	};

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={ORDERS}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
				style={styles.list}
			/>
		</SafeAreaView>
	);
};
