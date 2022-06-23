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
import { Profi as style_profil} from "../../Style";
import { menu as style} from "../../Style";
import Alt from '../Menu/alt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Item } from "./Item";
import MainStore from '../../Store/MainStore';

export default class Profil extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userPost: [],
            user: []
        }
    }
    componentDidMount = async() =>{
        const id = MainStore.getUser_Profil();
        await axios.get("https://halilozler.com.tr/api/home/user/" + id).then((res) => this.setState({user: res.data})).catch((err) => console.log(err));
        await axios.get("https://halilozler.com.tr/api/home/getUserPost/" + id + "/" + MainStore.getUser_id()).then((res) => this.setState({userPost: res.data})).catch((err) => console.log(err));
    }

    _renderItem = ({item}) => {
        MainStore.setNav(this.props.navigation);
        return <Item item={item}/>
    }

    render(){
        const { userPost, user } = this.state;
        return(
            <View style={{height:"100%"}}>
                <ScrollView>
                    <View style={{flexDirection:"row",marginBottom:0, padding:10}}>
                        <View>
                            <Image style={style_profil.profil_img} source={{uri:"https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-15-512.png"}}/>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={[style_profil.isim,{ fontSize:20}]}>{user.ad} {user.soyad}</Text>
                            <Text><Icon name={"heart"}/> (Puanı: {user.puan})</Text>
                        </View>
                    </View>
                    <View style={style_profil.etkinlik_text}>
                        <Text>Son Etkinlikleri:</Text>
                    </View>
                    <FlatList
                        data={userPost}
                        keyExtractor={item => item.post_id}
                        renderItem={this._renderItem}
                        ListEmptyComponent={() => <View><Text>Paylaşılan Atkinliği Yok</Text></View>}
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