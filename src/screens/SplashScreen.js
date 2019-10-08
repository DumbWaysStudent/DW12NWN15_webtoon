import React, { Component } from "react"
import { View, Image, StatusBar } from "react-native"
import colors from "../assets/colors"
import styles from "../assets/styles/splashScreenStyle"

class SplashScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.prime} barStyle="light-content" />
        <Image 
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
      </View>
    )
  }
}

export default SplashScreen