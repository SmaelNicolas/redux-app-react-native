import { Text } from "react-native";
import { useFontCustom } from "./hook/useFonts";
import { AppNavigation } from "./navigation";

export default function App() {
	const { loaded } = useFontCustom();
	if (!loaded) return <Text>Loading</Text>;
	return <AppNavigation />;
}
