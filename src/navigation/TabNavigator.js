import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartNavigator } from "./CartNavigator";
import { ShopNavigator } from "./ShopNavigator";

const BottomTabs = createBottomTabNavigator();

export const TabNavigator = () => {
	return (
		<BottomTabs.Navigator
			initialRouteName="Shop"
			screenOptions={{
				headerShown: false,
			}}>
			<BottomTabs.Screen name="ShopTab" component={ShopNavigator} />
			<BottomTabs.Screen name="CartTab" component={CartNavigator} />
		</BottomTabs.Navigator>
	);
};
