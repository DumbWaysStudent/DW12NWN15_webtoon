import React, { Component } from "react"
import { View, TextInput, TouchableWithoutFeedback, Image, Text, FlatList, TouchableOpacity } from "react-native"
import Fa from "react-native-vector-icons/FontAwesome5"

import colors from "../assets/colors"
import styles from "../assets/styles/createWeebtoonStyle"
import { ScrollView } from "react-native-gesture-handler"

const data = [
    {
      id: "EP01",
      chapter: "1",
      chapImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
      date: "17 Jan 2018"
    }, {
      id: "EP02",
      chapter: "2",
      chapImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
      date: "25 Feb 2018"
    }, {
      id: "EP03",
      chapter: "3",
      chapImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
      date: "11 Mar 2018"
    },
  ]


class CreateWeebtoonScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <Fa name="check" size={18} color={colors.white} />
      </TouchableOpacity>
    )
  })
  
  renderFav = ({itm}) => (
    <TouchableWithoutFeedback onPress={() => alert("oke")}>
      <View key={itm.id} style={styles.listChapter}>
        <View style={styles.coverFrame}>
          <Image 
            source={{uri: itm.item.chapImg}} 
            style={styles.listCover}
          />
        </View>
        <View style={styles.descBox}>
          <Text style={styles.chapTitle}>Chapter {itm.item.chapter}</Text>
          <Text style={styles.chapCount}>{itm.item.date}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
  
  render() {
    return (
      <View style={styles.container}>
        
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View style={styles.formContainer}>
            <Text style={styles.titleText}>Title</Text>
            <View style={styles.boxInput}>
              <TextInput 
                placeholder="Title of series"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.chapterContainer}>
            <Text style={styles.titleText}>Chapters</Text>
            <FlatList 
              data={data}
              contentContainerStyle={styles.listContainer}
              renderItem={itm => this.renderFav({itm})}
              keyExtractor={itm => itm.id}
            />
          </View>
          
          <TouchableOpacity style={styles.addBtn}>
            <Fa name="plus" size={18} color={colors.white} />
            <Text style={styles.btnText}>Add Episode</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

export default CreateWeebtoonScreen