import React, { Component } from "react"
import { View, TextInput, TouchableWithoutFeedback, Image, Text, FlatList, TouchableOpacity } from "react-native"
import Fa from "react-native-vector-icons/FontAwesome5"
import ImagePicker from "react-native-image-picker"

import colors from "../assets/colors"
import styles from "../assets/styles/createChapterScreenStyle"
import { ScrollView } from "react-native-gesture-handler"

const data = [
    {
      id: "IMG01",
      fileName: "cover.png",
      chapImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
    }, {
      id: "IMG02",
      fileName: "intro.png",
      chapImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
    },
  ]

class EditChapterScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <Fa name="check" size={18} color={colors.white} />
      </TouchableOpacity>
    )
  })
  
  renderFav = ({itm}) => (
    <View key={itm.id} style={styles.listChapter}>
      <View style={styles.coverFrame}>
        <Image 
          source={{uri: itm.item.chapImg}} 
          style={styles.listCover}
        />
      </View>
      <View style={styles.descBox}>
        <Text style={styles.chapTitle}>{itm.item.fileName}</Text>
        <TouchableOpacity style={styles.delBtnSm} onPress={() => alert("Wow, wow, wow santuy dong")}>
          <Text style={styles.delBtnTextSm}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
  
  render() {
    return (
      <View style={styles.container}>
        
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View style={styles.formContainer}>
            <Text style={styles.titleText}>Name</Text>
            <View style={styles.boxInput}>
              <TextInput 
                placeholder="Name of chapter"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.chapterContainer}>
            <Text style={styles.titleText}>Add Images</Text>
            <FlatList 
              data={data}
              contentContainerStyle={styles.listContainer}
              renderItem={itm => this.renderFav({itm})}
              keyExtractor={itm => itm.id}
            />
          </View>
          
          <TouchableOpacity style={styles.addBtn} onPress={this._handleAddImage}>
            <Fa name="plus" size={18} color={colors.white} />
            <Text style={styles.btnText}>Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delBtn} onPress={() => alert("Wow, wow, wow santuy dong")}>
            <Text style={styles.btnText}>Delete Chapter</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }

  _handleAddImage = () => {
    const options = {
      title: "Choose image chapter",
      storageOptions: {
        skipBackup: true
      }
    }

    ImagePicker.launchImageLibrary(options, (response) => {
      // Same code as in above section!
      if(!response.error && !response.didCancel ) 
        alert("Mantab")
    });
  }
}

export default EditChapterScreen