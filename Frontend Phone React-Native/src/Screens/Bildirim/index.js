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
    TouchableOpacity,
    FlatList
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { bar as style_bar} from "../../Style";
import Alt from '../Menu/alt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Item } from './Item';
import axios from 'axios';

export default class Bildirim extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            veri: [],
        };
        
    }

    componentDidMount = () =>{
        this.getVeri();
        this.onLoad();
    }

    getVeri = async() =>{
        const id = await AsyncStorage.getItem('id');
        await axios.get("https://halilozler.com.tr/api/home/bildirim/" + id).then((res) => this.setState({veri: res.data})).catch((err) => console.log(err));
    }

    onLoad = () => {
        this.props.navigation.addListener('didFocus', () => this.getVeri());
    }

    _renderItem = ({item}) => {
        return <Item item={item}/>
    }

    render(){
        return(
            <View style={{height:"100%"}}>
                <ScrollView>
                    <FlatList
                        data={this.state.veri}
                        keyExtractor={item => item.id}
                        renderItem={this._renderItem}
                        ListEmptyComponent={() => <View><Text>Bildirim Yok</Text></View>}
                    />
                </ScrollView>
                <View style={style_bar.bosluk}></View>
                <View style={style_bar.alt}>
                    <Alt navigation={this.props.navigation}/>
                </View>
            </View>
        )
    }
}