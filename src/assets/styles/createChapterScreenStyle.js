import { StyleSheet } from "react-native"
import colors from "../colors"
import fonts from "../fonts"

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  formContainer: {
    marginBottom: 10
  },
  boxInput: {
    width: "100%",
    borderWidth: 2,
    borderColor: colors.gray,
    marginVertical: 10,
    borderRadius: 4,
  },
  input: {
    fontSize: 18,
    fontFamily: fonts.raleway.normal,
    paddingHorizontal: 10
  },

  listContainer: {
    paddingVertical: 5,
    flexDirection: "column-reverse"
  },
  titleText: {
    fontSize: 22,
    fontFamily: fonts.quicksand.semiBold
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.primeDarken,
    width: "100%",
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 4,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.primeDarken,
    width: "100%",
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 4,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  delBtn: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.error,
    width: "100%",
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 4,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  btnText: { 
    marginLeft: 10,
    fontSize: 18,
    fontFamily: fonts.quicksand.bold,
    color: colors.white,
    marginVertical: 10,
  },
  delBtnSm: {
    backgroundColor: colors.error,
    paddingVertical: 5,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    minWidth: "25%",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  delBtnTextSm: {
    color: colors.white,
    fontSize: 16
  }
})