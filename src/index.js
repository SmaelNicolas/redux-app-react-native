import { Text } from "react-native";
import { Provider } from "react-redux";
import { useFontCustom } from "./hook/useFonts";
import { AppNavigation } from "./navigation";
import store from "./store";

export default function App() {
	const { loaded } = useFontCustom();
	if (!loaded) return <Text>Loading</Text>;
	return (
		<Provider store={store}>
			<AppNavigation />
		</Provider>
	);
}
