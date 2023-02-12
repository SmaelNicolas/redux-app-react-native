import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	button: {
		marginVertical: 10,
		marginHorizontal: 20,
		backgroundColor: colors.greyBlue,
		borderWidth: 1,
		borderColor: colors.rose,
		padding: 10,
	},
	text: {
		textAlign: "center",
		textTransform: "uppercase",
		color: colors.rose,
		fontFamily: "Bitter-Bold",
		letterSpacing: 3,
	},
});
