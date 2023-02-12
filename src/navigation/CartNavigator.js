import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens";

const CartStack = createNativeStackNavigator();

export const CartNavigator = () => {
	return (
		<CartStack.Navigator
			initialRouteName="Cart"
			screenOptions={{
				headerShown: false,
			}}>
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
