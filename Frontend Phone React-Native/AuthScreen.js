import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStore from './src/Store/MainStore';


class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._kontrol();
        //AsyncStorage.removeItem("id");
    }

    _kontrol = async () => {
        const userToken = await AsyncStorage.getItem('id');
        //userToken= false;
        if(userToken != null){
            MainStore.setUser_id(userToken);
        }

        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return(
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoadingScreen;