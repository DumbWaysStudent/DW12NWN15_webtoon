import React, { Component } from "react"
import Carousel from "react-native-banner-carousel"
import { FlatList, Image, View, Text, TouchableOpacity, TextInput, Dimensions, StatusBar } from "react-native"
import Fa from "react-native-vector-icons/FontAwesome5"
import colors from "../assets/colors"
import styles from "../assets/styles/forYouScreeStyle"

const bannerWidth = Dimensions.get("window").width
const bannerHeight = 250

const banners = [
  {
    title: "Overlord",
    image: "https://cdn.animeuknews.net/app/uploads/2019/02/1_4.jpg"
  }, {
    title: "Goblin Slayer",
    image: "https://boundingintocomics.com/files/2019/09/2019.09.09-03.50-boundingintocomics-5d7674c2cdd18.png"
  }, {
    title: "Uchi no musume",
    image: "https://animekaizoku.com/wp-content/uploads/2019/07/19042310403576.jpg.webp"
  }
]

class ForYouScreen extends Component {
  constructor() {
    super()
  }

  renderBanner = (item, index) => (
    <View key={index} style={styles.caroselItem}>
      <Image style={{ height: bannerHeight }} source={{uri: item.image}} />
      <View style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#00000044", alignItems: "center"}}>
        <Text style={styles.caroselTitle}>{item.title}</Text>
      </View>
    </View>
  )

  render() {
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.prime} barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.searchBox}>
            <TextInput style={styles.searchInput} placeholder="Search" />  
            <TouchableOpacity>
              <Fa name="search" size={22} color={colors.gray}  />
            </TouchableOpacity>
          </View>
        </View>

        <Carousel
          autoplay
          autoplayTimeout={3500}
          loop
          index={0}
          pageSize={bannerWidth}
          
        >
          {banners.map((item, index) => this.renderBanner(item, index))}
        </Carousel>

        <View style={styles.favBox}>
          <Text style={styles.boxTitle}>Favourite</Text>
          <FlatList 
            
          />
        </View>
      </View>
    )
  }
}

export default ForYouScreen