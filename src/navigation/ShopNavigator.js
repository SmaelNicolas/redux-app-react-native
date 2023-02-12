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
			<ShopStack.Screen
				name="Home"
				options={{
					title: "TecnoStore",
				}}
				component={CategoriesScreen}
			/>
			<ShopStack.Screen
				name="Products"
				component={CategoryProductsScreen}
				options={({ route }) => ({
					title: route.params.name,
				})}
			/>
			<ShopStack.Screen
				name="Detail"
				options={({ route }) => ({
					title: route.params.title,
				})}
				component={ItemDetailScreen}
			/>
		</ShopStack.Navigator>
	);
};
