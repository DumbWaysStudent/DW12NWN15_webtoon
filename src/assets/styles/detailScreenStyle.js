import { StyleSheet } from "react-native"
import colors from "../colors"
import fonts from "../fonts"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bannerBox: {
    width: "100%",
    overflow: "hidden",
    borderBottomColor: colors.prime,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  listContainer: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    flexDirection: "column-reverse"
  },
  listChapter: {
    flexDirection: "row",
    marginVertical: 10
  },
  coverFrame: {
    borderWidth: 3,
    borderColor: colors.black,
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
  chapText: {
    fontFamily: fonts.quicksand.semiBold,
    fontSize: 18
  },
  chapDate: {
    color: colors.gray,
    fontSize: 14
  }
})

export default styles