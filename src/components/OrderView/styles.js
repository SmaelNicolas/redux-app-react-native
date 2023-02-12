import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginVertical: 5,
		marginHorizontal: 20,
		borderWidth: 1,
		borderColor: colors.rose,
	},
	detailContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginVertical: 5,
	},
	detailText: {
		color: colors.rose,
		fontFamily: "Bitter-Bold",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	button: {
		backgroundColor: colors.greyBlue,
		paddingHorizontal: 30,
		paddingVertical: 5,
		borderRadius: 999,
	},
	detailButton: {
		color: colors.white,
	},
});
