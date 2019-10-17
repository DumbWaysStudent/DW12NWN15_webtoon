import React, { Component } from "react"
import Carousel from "react-native-banner-carousel"
import { ScrollView, Image, View, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput, Dimensions, StatusBar } from "react-native"
import axios from "axios"
import Fa from "react-native-vector-icons/FontAwesome5"
import colors from "../assets/colors"
import styles from "../assets/styles/forYouScreeStyle"

import config from "../configs/config" 

const bannerWidth = Dimensions.get("window").width
const bannerHeight = 200

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
                <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate("Detail", {img: item.banner, title: item.name, mangaId: item.id})} >
                  <View style={[styles.favList, (index == 0 && {marginLeft: 10})]}>
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
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Detail", {img: item.banner, title: item.name, mangaId: item.id})}>
                  <Image style={styles.contentImg} source={{uri: item.cover}} />
                </TouchableWithoutFeedback>
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
        this.setState({data : res.data})
      })
    }catch(err) {
      console.log(err)
    }
  }
}

export default ForYouScreen