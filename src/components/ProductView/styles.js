import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		marginHorizontal: 20,
		backgroundColor: colors.greyBlue,
		borderWidth: 1,
		borderColor: colors.rose,
		padding: 10,
	},
	containerInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: { marginVertical: 4, color: colors.rose, fontFamily: "Bitter-Bold" },
	image: {
		width: 80,
		height: 60,
	},
	containerButtons: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginVertical: 15,
	},
	button: {
		backgroundColor: colors.darkBlue,
		paddingHorizontal: 30,
		paddingVertical: 5,
		borderRadius: 999,
		borderWidth: 1,
		borderColor: colors.white,
	},
	textButton: {
		color: colors.white,
	},
});
