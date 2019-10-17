import { StyleSheet } from "react-native"
import colors from "../colors"
import fonts from "../fonts"
import { hidden } from "colorette"

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    minHeight: "100%",
    paddingBottom: 20
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
    fontFamily: fonts.quicksand.normal,
    fontSize: 16,
    paddingHorizontal: 20
  },

  caroselItem: {
    position: "relative"
  },
  favBox: {
    marginTop: 10,
    // paddingLeft: 20
  },
  boxTitle: {
    fontFamily: fonts.quicksand.normal,
    fontSize: 22,
    marginBottom: 10,
    color: colors.black
  },
  favContent: {
    height: 210,
    paddingHorizontal: 0,
    paddingVertical: 10,
    marginHorizontal: 0
  },
  favList: {
    alignItems: "center",
    marginHorizontal: 5,
    paddingBottom: 5,
    borderRadius: 4,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  favImg: {
    height: 150,
    width: 125,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  favTitleBox: {
    overflow: "hidden"
  },
  favTitle: {
    fontSize: 16,
    fontFamily: fonts.raleway.normal,
    marginTop: 10,
    color: colors.black
  },

  allContentBox: {
    paddingHorizontal: 20,
  },
  contentList: {
    marginVertical: 5,
    flexDirection: "row"
  },
  contentImg: {
    width: 85,
    height: 125,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray
  },
  contentDesc: {
    justifyContent: "flex-start",
    marginLeft: 10
  },
  contentTitle: {
    fontFamily: fonts.quicksand.semiBold,
    marginBottom: 10,
    fontSize: 18,
  },
  contentBtn: {
    backgroundColor: colors.primeDarken,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    minWidth: 50,
  },
  contentBtnText: {
    fontSize: 18,
    fontFamily: fonts.raleway.normal,
    color: colors.white,
    marginLeft: 10
  },
})