import React, { Component } from "react"
import { View, Image, StatusBar } from "react-native"

class LoginScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2ecc71"}}>
        <StatusBar backgroundColor="#54d466" barStyle="light-content" />
        <Image 
          style={{width: 250, height: 250}}
          source={{
            uri: "https://i.pinimg.com/originals/31/c2/7f/31c27f8ba868e2fc1ee26894f4d74f32.jpg"
          }}
        />
      </View>
    )
  }
}

export default LoginScreen