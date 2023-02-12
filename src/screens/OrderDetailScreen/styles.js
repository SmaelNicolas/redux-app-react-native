import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		marginTop: 45,
		padding: 10,
		flex: 1,
		backgroundColor: colors.darkBlue,
	},
	buttonBack: {
		backgroundColor: colors.greyBlue,
		borderWidth: 1,
		borderColor: colors.white,
		alignSelf: "flex-start",
		paddingVertical: 3,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	textBack: { color: colors.white },
	text: {
		color: colors.rose,
		fontFamily: "Bitter-Medium",
		fontSize: 16,
		marginVertical: 5,
	},
	itemTitle: {
		color: colors.white,
		backgroundColor: colors.greyBlue,
		textAlign: "center",
		fontFamily: "Bitter-Medium",
		fontSize: 16,
		marginVertical: 5,
		paddingVertical: 5,
	},
	delete: {
		paddingVertical: 5,
		paddingHorizontal: 20,
		backgroundColor: colors.greyBlue,
		color: colors.white,
		borderRadius: 999,
		width: 100,
		textAlign: "center",
		alignSelf: "center",
		marginTop: 20,
		borderColor: colors.rose,
		borderWidth: 1,
	},
});
