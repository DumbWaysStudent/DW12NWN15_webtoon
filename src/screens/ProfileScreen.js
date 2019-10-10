import React, { Component } from "react"
import { View, Text } from "react-native"

class ProfileScreen extends Component {
  render() {
    return (
      <View style={{justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: "blue"}}>
        <Text style={{fontSize: 32, fontFamily: "raleway", color: "#fff"}}>Ini Profile screen</Text>
      </View>
    )
  }
}

export default ProfileScreen