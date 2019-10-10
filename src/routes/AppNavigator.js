import React from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"

import Fa from "react-native-vector-icons/FontAwesome5"
import colors from "../assets/colors"
import fonts from "../assets/fonts"

import LoginScreen from "../screens/LoginScreen"
import ForYouScreen from "../screens/ForYouScreen"
import FavouriteScreen from "../screens/FavouriteScreen"
import ProfileScreen from "../screens/ProfileScreen"

const AuthStack = createStackNavigator({
  Login: { screen: LoginScreen, navigationOptions: { header: null } }
})

const AppStack = createBottomTabNavigator(
  {
    ForYou: {screen: ForYouScreen, navigationOptions: {title: "For You"}},
    Favourite: {screen: FavouriteScreen, navigationOptions: {title: "Favourite"}},
    Profile: {screen: ProfileScreen, navigationOptions: {title: "My Profile"}}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = Fa
        if (routeName === "ForYou") {
          iconName = "th-large"
        } else if (routeName === "Favourite") {
          iconName = "star"
        } else if (routeName === "Profile") {
          iconName = "user-alt"
        }

        return <Fa name={iconName} size={25} color={tintColor} />
      },
    }),
    initialRouteName: "ForYou",

    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.silver,
      style: {
        shadowColor: 'rgba(58,55,55,0.1)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 3,
        borderTopColor: 'transparent',
        backgroundColor: colors.primeDarken,
        height: 65,
        paddingTop: 10,
        paddingVertical: 5,
      },
      labelStyle: {
        fontFamily: fonts.quicksand.normal,
        fontSize: 14,
        color: colors.white,
      }
    }
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
)