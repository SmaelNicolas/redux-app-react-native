import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		marginTop: 45,
		padding: 10,
		flex: 1,
		backgroundColor: colors.darkBlue,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
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
	title: { color: colors.rose, fontFamily: "Bitter-Bold", fontSize: 25 },
	image: { width: 150, height: 150 },
	description: {
		color: colors.white,
		fontFamily: "Bitter-Regular",
		fontSize: 15,
	},
	price: { color: colors.rose, fontFamily: "Bitter-Medium", fontSize: 20 },
});
