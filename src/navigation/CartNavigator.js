import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens/CartScreen";

const CartStack = createNativeStackNavigator();

export const CartNavigator = () => {
	return (
		<CartStack.Navigator initialRouteName="Cart">
			<CartStack.Screen
				name="Cart"
				component={CartScreen}
				options={{
					title: "Cart",
				}}
			/>
		</CartStack.Navigator>
	);
};
