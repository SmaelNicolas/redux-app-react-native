import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	CategoriesScreen,
	CategoryProductsScreen,
	ItemDetailScreen,
} from "../screens";

const ShopStack = createNativeStackNavigator();

export const ShopNavigator = () => {
	return (
		<ShopStack.Navigator
			initialRoute="Home"
			screenOptions={{
				headerShown: false,
			}}>
			<ShopStack.Screen name="Home" component={CategoriesScreen} />
			<ShopStack.Screen
				name="Products"
				component={CategoryProductsScreen}
			/>
			<ShopStack.Screen name="Detail" component={ItemDetailScreen} />
		</ShopStack.Navigator>
	);
};
