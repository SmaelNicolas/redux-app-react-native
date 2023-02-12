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
	title: { color: colors.rose, fontWeight: "700", fontSize: 20 },
	containerPrice: {
		flexDirection: "row",
	},
	total: {
		color: colors.white,
	},
	text: { color: colors.rose, fontWeight: "700" },
	delete: {
		borderWidth: 1,
		borderColor: colors.greyBlue,
		width: 100,
		alignSelf: "flex-end",
	},
	deleteText: {
		color: colors.rose,
		fontWeight: "500",
		textAlign: "center",
		marginVertical: 5,
	},
});
