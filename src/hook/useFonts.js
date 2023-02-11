import { useFonts } from "expo-font";

export const useFontCustom = () => {
	const [loaded, error] = useFonts({
		"Bitter-Regular": require("../../assets/fonts/Bitter-Regular.ttf"),
		"Bitter-Bold": require("../../assets/fonts/Bitter-Bold.ttf"),
		"Bitter-Light": require("../../assets/fonts/Bitter-Light.ttf"),
		"Bitter-Medium": require("../../assets/fonts/Bitter-Medium.ttf"),
	});

	return { loaded };
};
