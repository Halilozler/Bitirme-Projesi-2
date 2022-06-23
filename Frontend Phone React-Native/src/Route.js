import { createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; 
import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";

import AuthScreen from "../AuthScreen";
import Login from './Screens/Login/index';
import Register from './Screens/Register/index';
import Home from "./Screens/Home/index"
import Bildirim from './Screens/Bildirim';
import Profil from './Screens/Profil';
import Mesaj from "./Screens/Mesaj/index";
import Ust from "./Screens/Menu/Ust";
import SinglePost from "./Screens/Home/SinglePost";
import Bot from "./Screens/Bot/index";

const AuthenticateStack = createStackNavigator({
    Login: {
        screen:Login,
        navigationOptions:{
            header:null
        }
    },
    Register:{
        screen:Register,
        navigationOptions:{
            title:"Üye ol"
        }
    }
});

const AppStack = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Ust navigation={navigation}/>,
            }
        }
    },
    Bildirim:{
        screen:Bildirim,
        navigationOptions:{
            title:"Bildirim"
        }
    },
    Profil:{
        screen:Profil,
        navigationOptions:{
            title:"Profil"
        }
    },
    Mesaj:{
        screen:Mesaj
    },
    SinglePost:{
        screen:SinglePost,
        navigationOptions:{
            title:"Post"
        }
    },
    Bot:{
        screen:Bot,
        navigationOptions:{
            title:"Bot"
        }
    },
});

export default createAppContainer(
    createSwitchNavigator({
        AuthLoading: AuthScreen,
        App: AppStack,
        Auth: AuthenticateStack,
    },
    {
        initialRouteName: 'AuthLoading',
    })
);