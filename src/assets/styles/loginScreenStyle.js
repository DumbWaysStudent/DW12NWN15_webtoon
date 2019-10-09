import { StyleSheet } from "react-native"
import colors from "../colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.prime,
    // paddingHorizontal: 20
  },

  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    color: colors.black
  },
  logo: {
    width: 150,
    height: 150
  },
  loginCard: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 35,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  titleSub: {
    fontSize: 18,
    marginTop: 10,
    color: colors.white
  },

  form: {
    // flex: 1
  },
  formGroup: {
    paddingVertical: 10,
  },
  icon: {
    marginLeft: 15,
    marginRight: 5
  },
  eyeIcon: {
    marginRight: 15,
    marginLeft: 5
  },
  lable: {
    fontSize: 16,
    marginBottom: 8
  },
  inputBox: {
    borderBottomWidth: 1,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.prime,
  },
  input: {
    flex: 1,
    // backgroundColor: 'red',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  eyeBtn: {
    marginHorizontal: 5
  },

  loginBtn: {
    // marginTop: 25,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.prime,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  loginBtnText: {
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.white
  },
  loginBtnDisabled: {
    backgroundColor: colors.primeDarken
  },


  // All rrror
  errText: {
    fontSize: 12,
    marginTop: 5,
    color: colors.error
  },
  inputBoxErr: {
    borderColor: colors.error,
    backgroundColor: colors.error,
    borderBottomWidth: 0
  },
  inputErr: {
    color: colors.white
  }
})

export default styles