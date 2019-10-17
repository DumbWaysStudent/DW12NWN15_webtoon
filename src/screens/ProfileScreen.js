import React, { Component } from "react"
import { View, TouchableOpacity, Image, Text } from "react-native"
import Fa from "react-native-vector-icons/FontAwesome5"
import styles from "../assets/styles/profileScreenStyles"
import colors from "../assets/colors"

class ProfileScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
        <Fa name="pencil-alt" size={18} color={colors.white} />
      </TouchableOpacity>
    )
  })
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileTop}>
          <View style={styles.imgFrame}>
            <Image style={styles.imgProfile} resizeMode="cover" source={{uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dcf7g8s-654d8a71-547a-4337-904f-7e73bdfe1b85.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5YjFmOGYxLWEzZWMtNDMyZC04ZTVlLTkxNzkzYmQzN2NjNFwvZGNmN2c4cy02NTRkOGE3MS01NDdhLTQzMzctOTA0Zi03ZTczYmRmZTFiODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LysuaIEvv3cWHbj-Ase46NR55Wjfs_Xphta4RjNuSSw"}} />
          </View>
          <Text style={styles.nameTitle}>Your Name</Text>
        </View>

        <View style={styles.actionBars}>
          <TouchableOpacity style={[styles.actionPanel, {borderBottomWidth: .5}]} onPress={() => this.props.navigation.navigate("MyWeebtoon")}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionText}>My Webtoon Creation</Text>
              <Fa name="chevron-right" size={22} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Auth")} style={[styles.actionPanel, {borderTopWidth: .5}]}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default ProfileScreen