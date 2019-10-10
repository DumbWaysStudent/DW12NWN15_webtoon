import React, { Component } from "react"
import { View, TextInput, TouchableWithoutFeedback, Image, Text, FlatList, TouchableOpacity } from "react-native"
import Fa from "react-native-vector-icons/FontAwesome5"

import colors from "../assets/colors"
import styles from "../assets/styles/favouriteScreenStyle"

const data = [
    {
      id: "FV01",
      title: "Overlord",
      banner: "https://images3.alphacoders.com/667/667877.jpg",
      favImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
      favCount: "100+"
    }, {
      id: "FV02",
      title: "Goblin Slayer",
      banner: "https://boundingintocomics.com/files/2019/09/2019.09.09-03.50-boundingintocomics-5d7674c2cdd18.png",
      favImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
      favCount: "100+"
    }, {
      id: "FV03",
      title: "Uchi no ko",
      banner: "https://animekaizoku.com/wp-content/uploads/2019/07/19042310403576.jpg.webp",
      favImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b1f8f1-a3ec-432d-8e5e-91793bd37cc4/dakrfjg-90b93f1b-3e5e-4763-9e7e-f7b3bb63a397.jpg/v1/fill/w_911,h_878,q_70,strp/goblin_slayer_avatar_2_by_shadowskyexe_dakrfjg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTg3IiwicGF0aCI6IlwvZlwvZDliMWY4ZjEtYTNlYy00MzJkLThlNWUtOTE3OTNiZDM3Y2M0XC9kYWtyZmpnLTkwYjkzZjFiLTNlNWUtNDc2My05ZTdlLWY3YjNiYjYzYTM5Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BoC8klMcCPHqaZatT7mVnvykidrNKnxwvUSG80nsrp4",
      favCount: "95"
    }
  ]


class FavouriteScreen extends Component {

  renderFav = ({itm}) => (
    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Detail", {title: itm.item.title, img: itm.item.banner})}>
      <View key={itm.id} style={styles.listChapter}>
        <View style={styles.coverFrame}>
          <Image 
            source={{uri: itm.item.favImg}} 
            style={styles.listCover}
          />
        </View>
        <View style={styles.descBox}>
          <Text style={styles.favTitle}>{itm.item.title}</Text>
          <Text style={styles.favCount}>{itm.item.favCount} Favourite</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchBox}>
            <TextInput style={styles.searchInput} placeholder="Search" />  
            <TouchableOpacity>
              <Fa name="search" size={22} color={colors.gray}  />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList 
          data={data}
          contentContainerStyle={styles.listContainer}
          renderItem={itm => this.renderFav({itm})}
          keyExtractor={itm => itm.id}
        />
      </View>
    )
  }
}

export default FavouriteScreen