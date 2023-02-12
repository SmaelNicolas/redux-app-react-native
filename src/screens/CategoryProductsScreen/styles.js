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
});
