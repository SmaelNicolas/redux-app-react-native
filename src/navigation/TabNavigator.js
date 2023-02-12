import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { colors } from "../theme/colors";
import { CartNavigator } from "./CartNavigator";
import { OrderNavigator } from "./OrderNavigator";
import { ShopNavigator } from "./ShopNavigator";

const BottomTabs = createBottomTabNavigator();

export const TabNavigator = () => {
	return (
		<BottomTabs.Navigator
			initialRouteName="Shop"
			screenOptions={{
				headerShown: false,
			}}>
			<BottomTabs.Screen
				name="ShopTab"
				component={ShopNavigator}
				options={{
					title: "Shop",
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							size={26}
							color={colors.darkBlue}
						/>
					),
				}}
			/>
			<BottomTabs.Screen
				name="CartTab"
				component={CartNavigator}
				options={{
					title: "Cart",
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? "cart" : "cart-outline"}
							size={26}
							color={colors.darkBlue}
						/>
					),
				}}
			/>
			<BottomTabs.Screen
				name="OrderTab"
				component={OrderNavigator}
				options={{
					title: "Orders",
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? "file-tray" : "file-tray-outline"}
							size={26}
							color={colors.darkBlue}
						/>
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};
