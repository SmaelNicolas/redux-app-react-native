import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		marginTop: 45,
		padding: 10,
		flex: 1,
		backgroundColor: colors.darkBlue,
	},
	list: {},
	buttonContainer: {
		backgroundColor: colors.greyBlue,
		paddingHorizontal: 10,
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	button: {
		borderColor: colors.white,
		borderWidth: 1,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 10,
	},
	buttonText: {
		color: colors.white,
		fontSize: 18,
		fontWeight: "500",
	},
});
