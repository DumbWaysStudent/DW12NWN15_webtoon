import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, Dimensions, Share } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import Fa from "react-native-vector-icons/FontAwesome5"

import styles from "../assets/styles/chapterScreenStyle"
import colors from "../assets/colors"

const width = Dimensions.get("window").width

const data = [
  {
    id: "MG010101RW",
    img: "https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_4/1.jpg"
  },
  {
    id: "MG010102RW",
    img: "https://1.bp.blogspot.com/-d6Fyv21ijYs/Wh7OhSi02gI/AAAAAAAEOuI/T90mpRPBRs0LsHiIFbwiWZ0Kly5HUBdAgCHMYCw/s0/001.jpg"
  },
  {
    id: "MG010103RW",
    img: "https://1.bp.blogspot.com/-QM9Hbx-SyrA/Wh7OiGbPAZI/AAAAAAAEOuM/OasPDT1BaEY_ZhktIchRpCh56HJDGbDcgCHMYCw/s0/002.jpg"
  },
  {
    id: "MG010104RW",
    img: "https://1.bp.blogspot.com/-yq5PJveQaJc/Wh7OjALJutI/AAAAAAAEOuU/s5Bl9soVlOEo3WPpqaSDxc1SlQ1zV1UtQCHMYCw/s0/004.jpg"
  },
  {
    id: "MG010105RW",
    img: "https://1.bp.blogspot.com/-CuNL_fPE7Y0/Wh7On07X8PI/AAAAAAAEOu0/kLdWrrATWLgdf1ItQz82ybMnziYYD0NlwCHMYCw/s0/012.jpg"
  },
]

class ChapterScreen extends Component {
  constructor() {
    super()
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Chapter " + navigation.getParam("chapter", "0"),
    headerRight: (
      <TouchableOpacity onPress={() => Share.share({message: "Let's checkout this cool manga on WeebToon!", title: "https://hikimo.github.io"})}>
        <Fa name="share-alt" size={18} color={colors.white} />
      </TouchableOpacity>
    )
  })

  renderChapter = ({itm}) => {
    return(
        <Image 
          key={itm.item.id}
          source={{uri: itm.item.img}} 
          style={{ width: width, height: 500 }}
          resizeMode="cover"
        />      
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
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


export default ChapterScreen