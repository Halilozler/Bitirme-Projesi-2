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
    FlatList,
    Linking
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { bar as style_bar} from "../../Style";
import Alt from '../Menu/alt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Item } from './Item';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default class Bildirim extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            veri: [],
        }
    }

    setYorum = async(item) =>{
        await axios.get("https://halilozler.com.tr/api/yardim/bot/" + item.yazi)
        .then((res) => {
            res.data.ad = item.yazi;
            if(this.state.veri == []){
                this.setState({veri: res.data});
            }
            else{
                let newData = this.state.veri.concat(res.data);
                this.setState({veri: newData});
            }
            //title, link
            item.yazi="";
        }).catch((err) => console.log(err));
    }

    _renderItem = ({item}) => {
        return (
            <View style={{marginBottom:10}}>
                <View style={{backgroundColor:"#808080", alignContent:"center", borderRadius:100, marginBottom:10, height:30}}>
                    <Text style={{color:"white", paddingLeft:15, paddingTop:5}}>{item.ad}</Text>
                </View>
                <View style={{backgroundColor:"#808080", alignContent:"center", borderRadius:100, marginLeft:30, marginBottom:10}}>
                    <Text style={{color:"white", paddingLeft:15, flexWrap:"wrap"}}>{item.title}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                        <Text style={{color:"white", paddingLeft:15,  flexWrap:"wrap"}}>{item.link}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    render(){
        const { veri, id } = this.state;
        return(
            <View style={{height:"100%"}}>
                <View>
                    <FlatList
                            data={veri}
                            keyExtractor={item => id }
                            renderItem={this._renderItem}
                            ListEmptyComponent={() => <View><Text>Yorum Yok</Text></View>}
                        />
                </View>

                <View style={[style_bar.bosluk, {height:130}]}></View>
                
                <Formik
                    initialValues={{
                        yazi:"",
                    }}
                    onSubmit={this.setYorum}
                    validationSchema={Yup.object().shape({
                        yazi:Yup.string().required()
                    })}
                    >
                    {({
                        values, 
                        handleSubmit,
                        handleChange
                    }) => (
                <View style={[style_bar.alt, {backgroundColor:"white" ,height:60, bottom:60, flexDirection:"row"}]}>
                    <View style={{width:"81%", marginLeft:5}}>
                        <TextInput style={{borderColor:"black",borderWidth:2, borderRadius:100}} placeholder="Yorumunu Yaz" value={values.yazi} onChangeText={handleChange("yazi")}/>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderRadius:100, backgroundColor:"#808080", height:55, marginLeft:5}} onPress={handleSubmit}>
                        <Text style={{color:"white", padding:5, paddingTop:15}}>Bota Sor</Text>
                            </TouchableOpacity>
                    </View>
                </View>
                )}
                </Formik>

                <View style={style_bar.bosluk}></View>
                <View style={style_bar.alt}>
                    <Alt navigation={this.props.navigation}/>
                </View>
            </View>
        )
    }
}