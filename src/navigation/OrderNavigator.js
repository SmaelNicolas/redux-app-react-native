import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrderDetailScreen, OrderScreen } from "../screens";

const OrderStack = createNativeStackNavigator();

export const OrderNavigator = () => {
	return (
		<OrderStack.Navigator
			initialRouteName="Orders"
			screenOptions={{
				headerShown: false,
			}}>
			<OrderStack.Screen
				name="Orders"
				component={OrderScreen}
				options={{
					title: "Orders",
				}}
			/>
			<OrderStack.Screen
				name="Orden Detail"
				component={OrderDetailScreen}
				options={({ route }) => ({
					title: route.params.title,
				})}
			/>
		</OrderStack.Navigator>
	);
};
