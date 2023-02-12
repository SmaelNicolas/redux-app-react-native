import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		marginTop: 45,
		paddingVertical: 10,
		flex: 1,
		backgroundColor: colors.darkBlue,
	},
	image: {
		width: 150,
		height: 150,
		alignSelf: "center",
		borderRadius: 999,
		borderColor: colors.rose,
		borderWidth: 4,
		marginVertical: 20,
	},
});
