import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, Dimensions, Share } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import Fa from "react-native-vector-icons/FontAwesome5"

import styles from "../assets/styles/detailScreenStyle"
import colors from "../assets/colors"
import fonts from "../assets/fonts"

const width = Dimensions.get("window").width

const data = [
  {
    id: "MG01-1",
    cover: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
    chapter: "1",
    date: "1 Januari 2018"
  },
  {
    id: "MG01-2",
    cover: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
    chapter: "2",
    date: "12 Febuari 2018"
  },
  {
    id: "MG01-3",
    cover: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
    chapter: "3",
    date: "8 Maret 2018"
  },
  {
    id: "MG01-4",
    cover: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
    chapter: "4",
    date: "6 April 2018"
  }
]

class DetailScreen extends Component {
  constructor() {
    super()
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("title", "No title"),
    headerRight: (
      <TouchableOpacity onPress={() => Share.share({message: "Let's checkout this cool manga on WeebToon!", title: "https://hikimo.github.io"})}>
        <Fa name="share-alt" size={18} color={colors.white} />
      </TouchableOpacity>
    )
  })

  renderChapter = ({itm}) => (
    <View key={itm.id} style={styles.listChapter}>
      <View style={styles.coverFrame}>
        <Image 
          source={{uri: itm.item.cover}} 
          style={styles.listCover}
        />
      </View>
      <View style={styles.descBox}>
        <Text style={styles.chapText}>Chapter {itm.item.chapter}</Text>
        <Text style={styles.chapDate}>{itm.item.date}</Text>
      </View>
    </View>
  )
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bannerBox}>
          <Image 
            style={{width: width, height: 200}}
            source={{uri: this.props.navigation.getParam("img", "no-img")}}
          />
        </View>

        <FlatList 
          data={data}
          contentContainerStyle={styles.listContainer}
          renderItem={itm => this.renderChapter({itm})}
          keyExtractor={itm => itm.id}
        />
      </View>
    )
  }
}


export default DetailScreen