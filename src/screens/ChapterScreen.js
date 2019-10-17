import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, Dimensions, Share } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import Fa from "react-native-vector-icons/FontAwesome5"
import axios from "axios"

import config from "../configs/config"

import styles from "../assets/styles/chapterScreenStyle"
import colors from "../assets/colors"

const width = Dimensions.get("window").width

class ChapterScreen extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("chapter", "0"),
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
          data={this.state.data}
          contentContainerStyle={styles.listContainer}
          renderItem={itm => this.renderChapter({itm})}
          keyExtractor={itm => itm.id}
        />
      </View>
    )
  }

  async componentDidMount() {
    this.getChapterDetail()
  }

  async getChapterDetail() {
    try{
      axios.get(config.host.concat('weebtoon/' + this.props.navigation.getParam('mangaId', '1') + '/chapter/' + this.props.navigation.getParam('chapterId', '1'))).then( res => {
        this.setState({data : res.data})
        console.log(this.state.data)
      })
    }catch(err) {
      console.log(err)
    }
  }
}


export default ChapterScreen