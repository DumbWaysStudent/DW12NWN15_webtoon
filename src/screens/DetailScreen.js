import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Share } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import Fa from "react-native-vector-icons/FontAwesome5"
import axios from "axios"

import config from "../configs/config"

import styles from "../assets/styles/detailScreenStyle"
import colors from "../assets/colors"

const width = Dimensions.get("window").width

class DetailScreen extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
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
    <TouchableWithoutFeedback onPress={() => this.props.navigation.push("Chapter", {chapter: itm.item.title, chapterId: itm.item.chapter, mangaId: this.props.navigation.getParam('mangaId', '1')})}>
      <View key={itm.id} style={styles.listChapter}>
        <View style={styles.coverFrame}>
          <Image 
            source={{uri: itm.item.img}} 
            style={styles.listCover}
          />
        </View>
        <View style={styles.descBox}>
          <Text style={styles.chapText}>{itm.item.title}</Text>
          <Text style={styles.chapDate}>{itm.item.createdAt}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
          data={this.state.data}
          contentContainerStyle={styles.listContainer}
          renderItem={itm => this.renderChapter({itm})}
          keyExtractor={itm => itm.id}
        />
      </View>
    )
  }

  async componentDidMount() {
    this.getChapter()
  }

  async getChapter() {
    try{
      axios.get(config.host.concat('weebtoon/' + this.props.navigation.getParam('mangaId', '1') + '/chapters')).then( res => {
        this.setState({data : res.data})
      })
    }catch(err) {
      console.log(err)
    }
  }
}


export default DetailScreen