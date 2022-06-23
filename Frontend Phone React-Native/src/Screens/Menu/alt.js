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
import Icon from 'react-native-vector-icons/FontAwesome5';
import { bar as style} from "../../Style"
import Bildirim from '../Bildirim';
import MainStore from '../../Store/MainStore';

export default class Alt extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {navigation} = this.props;
        return(
            <View style={style.alt_menu}>
                <View style={{marginTop:5}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Bildirim")}>
                        <Icon name={'bell'} size={25} style={style.alt_icon}/>
                        <Text>Bildirim</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:5}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Icon name={'home'} size={25} style={style.alt_icon}/>
                        <Text>Anasayfa</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:5}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Bot")}>
                        <Icon name={'robot'} size={25} style={[style.alt_icon]}/>
                        <Text style={{marginLeft:5}}>Bot</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:3}}>
                    {/* cat: https://cdn4.iconfinder.com/data/icons/animal-3/100/animal-08-512.png */}
                    {/* dog: https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-15-512.png */}
                    <TouchableOpacity onPress={
                        () => 
                        {
                            MainStore.setUser_Profil(MainStore.getUser_id());
                            navigation.navigate("Profil");
                        }}>
                        <Image source={{uri:"https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-15-512.png"}} style={{width:28, height:28, borderRadius:100}}/> 
                        <Text>Profil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}