import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./TabNavigator";

export const AppNavigation = () => {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
};
