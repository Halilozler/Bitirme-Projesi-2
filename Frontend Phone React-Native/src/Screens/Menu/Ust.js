import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import MainStore from '../../Store/MainStore';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Ust extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    }
    render(){
        const {navigation} = this.props;
        return(
            <View style={{height:55, flexDirection:"row"}}>
                <Text style={{fontSize:25, paddingTop:10, color:"black"}}>Animalous</Text>
                <View style={{position:"absolute", right:10, top:15, flexDirection:"row"}}>
                <TouchableOpacity style={{paddingRight:15}} onPress={ async() => {
                    await MainStore.deleteUser_id();
                    await AsyncStorage.removeItem("id");
                    navigation.navigate("Auth");
                }}>
                    <Icon name="times" duotone size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Mesaj")}>
                    <Icon name="plus" size={25} />
                </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}