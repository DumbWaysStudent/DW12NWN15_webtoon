import { StyleSheet } from "react-native"
import colors from "../colors"
import fonts from "../fonts"

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },

  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    flexDirection: "column-reverse"
  },
  listChapter: {
    flexDirection: "row",
    marginVertical: 10
  },
  coverFrame: {
    borderWidth: 3,
    borderColor: colors.gray,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  listCover: {
    width: 75,
    height: 75
  },
  descBox: {
    marginLeft: 10,
    justifyContent: "space-evenly"
  },
  chapTitle: {
    fontFamily: fonts.quicksand.semiBold,
    fontSize: 18
  },
  chapCount: {
    color: colors.gray,
    fontSize: 14
  },

  addBtn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    right: 20,
    backgroundColor: colors.primeDarken,
    height: 50,
    width: 50,
    borderRadius: 25,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  }
})