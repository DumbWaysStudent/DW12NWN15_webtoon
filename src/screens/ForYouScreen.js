import React, { Component } from "react"
import Carousel from "react-native-banner-carousel"
import { ScrollView, Image, View, Text, TouchableOpacity, TextInput, Dimensions, StatusBar } from "react-native"
import Fa from "react-native-vector-icons/FontAwesome5"
import colors from "../assets/colors"
import styles from "../assets/styles/forYouScreeStyle"

const bannerWidth = Dimensions.get("window").width
const bannerHeight = 200

const data = {
  banners : [
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
  ],
  fav: [
    {
      title: "Overlord",
      banner: "https://images3.alphacoders.com/667/667877.jpg",
      image: "https://i.pinimg.com/564x/35/a2/0f/35a20f33f23cf8d00f45e935c176491b.jpg"
    }, {
      title: "Goblin Slayer",
      banner: "https://boundingintocomics.com/files/2019/09/2019.09.09-03.50-boundingintocomics-5d7674c2cdd18.png",
      image: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/575114/575114._SX360_QL80_TTD_.jpg"
    }, {
      title: "Uchi no ko",
      banner: "https://animekaizoku.com/wp-content/uploads/2019/07/19042310403576.jpg.webp",
      image: "https://66.media.tumblr.com/9475e2b20e08f8d7acc60bc67e4d8744/tumblr_ox7n8f1fM21r60zuio1_540.png"
    }
  ],
  list: [
    {
      title: "Boruto",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Boruto_manga_vol_1.jpg/220px-Boruto_manga_vol_1.jpg"
    }, {
      title: "Kishuku Gakko no Juliet",
      image: "https://i.imgur.com/qDE47kM.jpg"
    }, {
      title: "Re:Zero kara hajimeru",
      image: "https://vignette.wikia.nocookie.net/rezero/images/2/26/Volume_9_Cover.png/revision/latest/scale-to-width-down/275?cb=20160907161032"
    }
  ]    
}

class ForYouScreen extends Component {
  constructor() {
    super()
  }

  renderBanner = (item) => (
    <View key={item.id} style={styles.caroselItem}>
      <Image style={{ height: bannerHeight }} source={{uri: item.image}} />
      <View style={styles.carouselImgFilter}>
        <Text style={styles.caroselTitle}>{item.title}</Text>
      </View>
    </View>
  )

  render() {
    return(
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            {data.banners.map((item, index) => this.renderBanner(item, index))}
          </Carousel>

          <View style={styles.favBox}>
            <Text style={styles.boxTitle}>Favourite</Text>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.favContent}
            >
              {data.fav.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate("Detail", {img: item.banner, title: item.title})} >
                  <View style={styles.favList}>
                    <Image style={styles.favImg} source={{uri: item.image}} />
                    <View style={{paddingHorizontal: 5}}>
                      <Text style={styles.favTitle}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.allContentBox}>
            <Text style={styles.boxTitle}>All</Text>
            {data.list.map((item, index) => (
              <View key={index} style={styles.contentList}>
                <Image style={styles.contentImg} source={{uri: item.image}} />
                <View style={styles.contentDesc}>
                  <Text style={styles.contentTitle}>{item.title}</Text>
                  <TouchableOpacity style={styles.contentBtn}>
                    <Fa name="plus" size={16} color={colors.white} />
                    <Text style={styles.contentBtnText}>Favourite</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

        </ScrollView>
      </View>
    )
  }
}

export default ForYouScreen