import { StyleSheet } from "react-native"
import colors from "../colors"

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: colors.prime
  },
  logo: {
    width: 250,
    height: 250
  }
})

export default styles