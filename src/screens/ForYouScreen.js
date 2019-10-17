import React, { Component } from "react"
import Carousel from "react-native-banner-carousel"
import { ScrollView, Image, View, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput, Dimensions, StatusBar } from "react-native"
import axios from "axios"
import Fa from "react-native-vector-icons/FontAwesome5"
import colors from "../assets/colors"
import styles from "../assets/styles/forYouScreeStyle"

import config from "../config/config" 

const bannerWidth = Dimensions.get("window").width
const bannerHeight = 200

const data = {
  banners : [
    {
      title: "Overlord",
      banner: "https://images3.alphacoders.com/667/667877.jpg",
      image: "https://cdn.animeuknews.net/app/uploads/2019/02/1_4.jpg"
    }, {
      title: "Goblin Slayer",
      banner: "https://boundingintocomics.com/files/2019/09/2019.09.09-03.50-boundingintocomics-5d7674c2cdd18.png",
      image: "https://boundingintocomics.com/files/2019/09/2019.09.09-03.50-boundingintocomics-5d7674c2cdd18.png"
    }, {
      title: "Uchi no Ko",
      banner: "https://animekaizoku.com/wp-content/uploads/2019/07/19042310403576.jpg.webp",
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
      title: "Uchi no musume no tame naraba",
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

const favLen = data.fav.length - 1

class ForYouScreen extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getManga()
  }
  
  renderBanner = (item) => {
    console.log(item)
    if(item.is_hot) {
      return (
        <TouchableWithoutFeedback key={item.id} onPress={() => this.props.navigation.push("Detail", {title: item.name, img: item.banner})}>
          <View style={styles.caroselItem}>
            <Image style={{ height: bannerHeight }} resizeMode="cover" source={{uri: item.banner}} />
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }
    
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
            {this.state.data.map((item, index) => this.renderBanner(item, index))}
          </Carousel>

          <View style={styles.favBox}>
            <Text style={[styles.boxTitle, {marginLeft: 10}]}>Favourite</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.favContent}
            >
              {this.state.data.map((item, index) => item.is_favorite && (
                <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate("Detail", {img: item.banner, title: item.name})} >
                  <View style={[styles.favList, (index == 0 && {marginLeft: 10}), (index == favLen && {marginRight: 10}) ]}>
                    <Image style={styles.favImg} resizeMode="cover" source={{uri: item.cover}} />
                    <View style={{paddingHorizontal: 5}}>
                      <Text style={styles.favTitle}>
                        {(item.name).length > 13 ? (((item.name).substring(0,13-3)) + '...') : item.name}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.allContentBox}>
            <Text style={styles.boxTitle}>All</Text>
            {this.state.data.map((item, index) => (
              <View key={index} style={styles.contentList}>
                <Image style={styles.contentImg} source={{uri: item.cover}} />
                <View style={styles.contentDesc}>
                  <Text style={[styles.contentTitle, ]}>{item.name}</Text>
                  <TouchableOpacity style={styles.contentBtn}>
                    <Fa name="heart" size={16} color={colors.white} />
                    <Text style={styles.contentBtnText}>Favorite</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

        </ScrollView>
      </View>
    )
  }

  async getManga() {
    try{
      axios.get(config.host.concat('weebtoons')).then( res => {
        console.log(res.data)
        this.setState({data : res.data})
      })
    }catch(err) {
      console.log(err)
    }
  }
}

export default ForYouScreen