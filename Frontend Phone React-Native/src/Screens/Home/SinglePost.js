import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { bar as style_bar} from "../../Style";
import { menu as style} from "../../Style";
import Alt from '../Menu/alt';
import axios from 'axios';
import { observer } from "mobx-react";
import MainStore from '../../Store/MainStore';
import { ScrollView } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { Formik } from 'formik';
import * as Yup from 'yup';

@observer
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: [],
            id: MainStore.getPost_id(),
            yorumlar: [],
        }
    }

    componentDidMount = async() =>{
        this.getVeri();
        this.getYorum();
    }

    getVeri = async() => {
        await axios.get("https://halilozler.com.tr/api/home/getPost/" + this.state.id + "/" + MainStore.getUser_id()).then((res) => {this.setState({item: res.data});}).catch((err) => console.log(err));
    }

    getYorum = async() => {
        await axios.get("https://halilozler.com.tr/api/home/yorumlar/" + this.state.id ).then((res) => {this.setState({yorumlar: res.data});}).catch((err) => console.log(err));
    }

    setYorum = async(item) =>{
        await axios.get("https://halilozler.com.tr/api/home/yorumYap/" + this.state.id + "/" + MainStore.getUser_id() + "/" + item.yazi).then((res) => {this.getYorum() ;alert("Yorum Yapıldı"); item.yazi="";}).catch((err) => console.log(err));
    }

    _begenme = async() => {
        await axios.get("https://halilozler.com.tr/api/home/begen/" + this.state.id + "/" + MainStore.getUser_id()).then((res) => {alert("Beğenildi"); this.getVeri();}).catch((err) => console.log(err));
    }

    _renderItem = ({item}) => {
        return (
            <View style={{flexDirection:"row", marginBottom:10, marginLeft:5}}>
                        <View>
                            <Image style={[style.profil_img, {width:30, height:30}]} source={{uri:"https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-15-512.png"}}/>
                        </View>
                        <View style={{backgroundColor:"#808080", alignContent:"center", borderRadius:100}}>
                            <Text style={{color:"white", padding:"5%", flexWrap:"wrap"}}><Text style={{fontSize:15, fontWeight:"bold"}}>{item.ad} {item.soyad}: </Text> {item.text}</Text>
                        </View>
            </View>
        )
    }

    render(){
        const { item, yorumlar } = this.state;
        return(
            <View style={{height:"100%"}}>
                
                    <View style={style.post}>
                            <View style={{flexDirection:"row"}}>
                                <Image style={style.profil_img} source={{uri:"https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-15-512.png"}}/>
                                <View style={{marginLeft:5}}>
                                    <View style={{flexDirection:"row"}}>
                                        <Text style={style.isim}>{item.ad} {item.soyad}</Text>
                                        <Text style={{marginLeft:5, textAlignVertical:"bottom"}}>({item.tarih})</Text>
                                    </View>
                                    <Text >
                                        <Icon name='heart'/>{item.puan}
                                    </Text>
                                    
                                </View>
                            </View>
                            <View>
                                <Text style={style.text}>{item.yazi}</Text>
                            </View>
                            <View style={{marginTop:5, flexDirection:"row"}}>
                                <Text>Yorumlar({item.yorum_sayisi})</Text>
                                    {item.begendi ? 
                                        <Text style={{position:"absolute", right:5}}>
                                            <Icon name={'heart'} solid color={"red"}/> {(item.begeni_sayisi)}
                                        </Text>
                                        :
                                        <TouchableOpacity style={{position:"absolute", right:5}} onPress={this._begenme}>
                                            <Text >
                                                <Icon name={'heart'} light/> {(item.begeni_sayisi)}
                                            </Text>
                                        </TouchableOpacity>
                                    }
                                
                            </View>
                    </View>
                <ScrollView>
                    <FlatList
                        data={yorumlar}
                        keyExtractor={item => item.id}
                        renderItem={this._renderItem}
                        ListEmptyComponent={() => <View><Text>Yorum Yok</Text></View>}
                    />
                </ScrollView>

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
                    <View style={{width:"77%", marginLeft:5}}>
                        <TextInput style={{borderColor:"black",borderWidth:2, borderRadius:100}} placeholder="Yorumunu Yaz" value={values.yazi} onChangeText={handleChange("yazi")}/>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderRadius:100, backgroundColor:"#808080", height:55, marginLeft:5}} onPress={handleSubmit}>
                        <Text style={{color:"white", padding:5, paddingTop:15}}>Yorum Yap</Text>
                            </TouchableOpacity>
                    </View>
                </View>
                )}
                </Formik>
                <View style={style_bar.alt}>
                    <Alt navigation={this.props.navigation}/>
                </View>
            </View>
        
        )
    }
}