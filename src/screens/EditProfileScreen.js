import React, { Component } from "react"
import { View, TouchableOpacity, TextInput, Image, Text } from "react-native"
import ImagePicker from 'react-native-image-picker'
import Fa from "react-native-vector-icons/FontAwesome5"
import styles from "../assets/styles/profileScreenStyles"
import colors from "../assets/colors"

class EditProfileScreen extends Component {
  constructor() {
    super()
    this.state = {
      avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dcf7g8s-654d8a71-547a-4337-904f-7e73bdfe1b85.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5YjFmOGYxLWEzZWMtNDMyZC04ZTVlLTkxNzkzYmQzN2NjNFwvZGNmN2c4cy02NTRkOGE3MS01NDdhLTQzMzctOTA0Zi03ZTczYmRmZTFiODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LysuaIEvv3cWHbj-Ase46NR55Wjfs_Xphta4RjNuSSw"
    }
  }
  static navigationOptions = ({navigation}) => ({
    headerLeft: null,
    headerRight: (
      <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <Fa name="check" size={18} color={colors.white} />
      </TouchableOpacity>
    )
  })
  
  render() {
    return (
      <View style={styles.containerEdit}>
        <View style={styles.profileTopEdit}>
          <View>
            <View style={styles.imgFrame}>
              <Image style={styles.imgProfile} resizeMode="cover" source={{uri: this.state.avatar}} />
            </View>
            <TouchableOpacity style={styles.editBtn} onPress={this._onEditImage}>
              <Fa name="camera" size={32} color={colors.prime} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.boxInput}>
            <TextInput 
              style={styles.inputName}
              placeholder="Your Name"
            />
          </View>
        </View>
      </View>
    )
  }

  _onEditImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true
      },
    }

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)
    
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = response.uri
    
        this.setState({
          avatar: source,
        })
      }
    })
  }
}

export default EditProfileScreen