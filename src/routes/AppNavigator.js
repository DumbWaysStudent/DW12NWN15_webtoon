import React from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"

import Fa from "react-native-vector-icons/FontAwesome"
import colors from "../assets/colors"
import fonts from "../assets/fonts"

import LoginScreen from "../screens/LoginScreen"
import ForYouScreen from "../screens/ForYouScreen"
import FavouriteScreen from "../screens/FavouriteScreen"
import ProfileScreen from "../screens/ProfileScreen"
import DetailScreen from "../screens/DetailScreen"
import ChapterScreen from "../screens/ChapterScreen"
import EditProfileScreen from "../screens/EditProfileScreen"
import MyWeebtoonScreen from "../screens/MyWeebtoonScreen"

const AuthStack = createStackNavigator({
  Login: { screen: LoginScreen, navigationOptions: { header: null } }
})

const AdminStack = createStackNavigator(
  {
  Profile: {screen: ProfileScreen, navigationOptions: {title: "Profile"}}
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.prime
      },
      headerRightContainerStyle: {
        paddingRight: 20
      },
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.quicksand.semiBold,
        textTransform: "uppercase",
        alignSelf: "center",
        justifyContent: "center"
      },
      headerTintColor: colors.white,
    }
  }
)

const AppStack = createBottomTabNavigator(
  {
    ForYou: {screen: ForYouScreen, navigationOptions: {title: "For You"}},
    Favourite: {screen: FavouriteScreen, navigationOptions: {title: "Favourite"}},
    Profile: {screen: AdminStack, navigationOptions: {title: "My Profile"}}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        if (routeName === "ForYou") {
          iconName = "th-large"
        } else if (routeName === "Favourite") {
          iconName = "heart"
        } else if (routeName === "Profile") {
          iconName = "user"
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

const ContentStack = createStackNavigator(
  {
    ForYou: {screen: AppStack, navigationOptions: {header: null}},
    Detail: {screen: DetailScreen},
    Chapter: {screen: ChapterScreen},
    Profile: {screen: AppStack, navigationOptions: {title: "Profile"}},
    EditProfile: {screen: EditProfileScreen, navigationOptions: {title: "Edit Profile"}},
    MyWeebtoon: {screen: MyWeebtoonScreen, navigationOptions: {title: "My Weebtoon"}},
},
  {
    initialRouteName: "ForYou",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.prime
      },
      headerRightContainerStyle: {
        paddingRight: 20
      },
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.quicksand.semiBold,
        textTransform: "uppercase",
        alignSelf: "center",
        justifyContent: "center"
      },
      headerTintColor: colors.white,
    }
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Content: ContentStack
    },
    {
      initialRouteName: "Content"
    }
  )
)