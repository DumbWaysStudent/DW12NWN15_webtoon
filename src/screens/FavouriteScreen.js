import React, { Component } from "react"
import { View, Text } from "react-native"

class FavouriteScreen extends Component {
  render() {
    return (
      <View style={{justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: "green"}}>
        <Text style={{fontSize: 32, fontFamily: "raleway", color: "#fff"}}>Ini FavouriteScreen screen</Text>
      </View>
    )
  }
}

export default FavouriteScreen