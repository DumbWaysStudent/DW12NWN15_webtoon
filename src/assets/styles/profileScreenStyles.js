import { StyleSheet } from "react-native"
import colors from "../colors";
import fonts from "../fonts";

export default styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  profileTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imgFrame: {
    height: 150,
    width: 150,
    borderWidth: 5,
    borderColor: colors.gray,
    borderRadius: 125,
    overflow: "hidden"
  },
  imgProfile: {
    height: 150,
    width: 150
  },
  nameTitle: {
    fontSize: 22,
    marginVertical: 10,
    textTransform: "uppercase",
    fontFamily: fonts.quicksand.semiBold,
  },

  actionBars: {
    flex: 1,
    justifyContent: "flex-start",
  },
  actionPanel: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.black,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: "center"
  },
  actionBtn: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  actionText: {
    fontSize: 18,
    fontFamily: fonts.raleway.normal,
  }
})