import { StyleSheet } from "react-native"
import colors from "../colors"
import fonts from "../fonts"

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    minHeight: 50,
    backgroundColor: colors.prime,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  searchBox: {
    backgroundColor: colors.white,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 20
  },

  caroselItem: {
    position: "relative"
  },
  caroselTitle: {
    position: "absolute",
    color: colors.white,
    fontFamily: fonts.raleway,
    fontSize: 28,
    marginTop: 25,
    textTransform: "uppercase",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 1.41,
    elevation: 2,
  },

  favBox: {
    paddingVertical: 20,
    paddingLeft: 20
  },
  boxTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: colors.black
  }
})