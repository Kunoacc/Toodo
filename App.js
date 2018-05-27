import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
// import the different screens
import Loading from './screens/Loading'
import SignUp from './screens/SignUp'
import Login from './screens/Login'
import RootComponent from './navigation/RootComponent'
// create our app's navigation stack
const App = SwitchNavigator(
    {
        Loading,
        SignUp,
        Login,
        RootComponent
    },
    {
        initialRouteName: 'Loading'
    }
)
export default App