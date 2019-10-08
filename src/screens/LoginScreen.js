import React, { Component } from "react"
import { View, Text, StatusBar } from "react-native"

class LoginScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "brown"}}>
        <StatusBar backgroundColor="#54d466" barStyle="light-content" />
        <Text style={{fontSize: 32, color: "#ffffff"}}>Hello, Jangkrik!</Text>
      </View>
    )
  }
}

export default LoginScreen