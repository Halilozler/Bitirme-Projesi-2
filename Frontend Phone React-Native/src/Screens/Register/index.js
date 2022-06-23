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
import Icon from "react-native-vector-icons/FontAwesome"
import { login as style} from "../../Style"
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import userService from '../../../_service/userService';

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Cinsiyet: "0",
            cinsiyet_data: true,
            hidePassword:true,
        }
    }

    setSelectedLanguage = async(value) => {
        await this.setState({Cinsiyet: value});
        if(this.state.Cinsiyet == "0"){
            this.setState({cinsiyet_data: true});
        }else{
            this.setState({cinsiyet_data: false});
        }
    }

    _postMetot = async(data) => {
        data.cinsiyet = this.state.cinsiyet_data;
        const _userService = new userService();
        await _userService.Post_Register(data, this.props.navigation);
    }

    render(){
        const {Cinsiyet} = this.state;
        return(
            <ScrollView>
                <View style={[style.Logo, {marginTop:20}]}>
                        <Image style={{height:200, width:200}} source={{uri:'https://am3pap006files.storage.live.com/y4m7Mq2ZtOiwOZh4Jka2F66XTyOwtKo5IIKBDAjMIAQcbCHcmxlW_kXLp5zjbNAMBzCVHUN41TNBu9UGOw4BYO9PvYdUzNMUwHe8XwxIPOx7DWmBXOPD4yCP5rcJ-R-H-YWFoNm8JGffFBj17EDjdcHuJI8yTUoM8t4zOvErhHwHpxiyvuClHrplGxbp4E21LkabCaIlTjiC26u4xNOO4Vl0mSgWZEskQfAxgnwZ6GRAow?encodeFailures=1&width=891&height=891'}}/>
                </View>
                <Formik
                    initialValues={{
                        kullanici_Adi:"",
                        sifre:"",
                        Ad:"",
                        Soyad:"",
                        cinsiyet:true,
                        resim_id:1
                    }}
                    onSubmit={this._postMetot}
                    validationSchema={Yup.object().shape({
                        kullanici_Adi:Yup.string().required("Kullanıcı Adı gereklidir"),
                        sifre:Yup.string().required("Şifre gerekli"),
                        Ad:Yup.string().required("Ad gerekli"),
                        Soyad:Yup.string().required("Soyad gerekli"),
                    })}
                >
                    {({
                                values, 
                                handleSubmit,
                                handleChange,
                                errors
                        }) => (
                <View style={style.board}>
                    <View>
                        <View style={[style.item, {flexDirection:"row"}]}>
                            <View style={style.item_iki}>
                                <TextInput placeholder='Ad' style={style.input} value={values.Ad} onChangeText={handleChange("Ad")}/>
                                {(errors.Ad) && <Text style={{color:"red"}}>{errors.Ad}</Text>}
                            </View>
                            <View style={[style.item_iki, {marginLeft:35}]}>
                                <TextInput placeholder='Soyad' style={style.input} value={values.Soyad} onChangeText={handleChange("Soyad")}/>
                                {(errors.Soyad) && <Text style={{color:"red"}}>{errors.Soyad}</Text>}
                            </View>
                        </View>
                        <View style={style.item}>
                            <TextInput placeholder='Kullanıcı Adı' style={style.input} value={values.kullanici_Adi} onChangeText={handleChange("kullanici_Adi")}/>
                                {(errors.kullanici_Adi) && <Text style={{color:"red"}}>{errors.kullanici_Adi}</Text>}
                        </View>
                        <View style={style.item}>
                            <TextInput placeholder='Şifre' style={style.input} value={values.sifre} onChangeText={handleChange("sifre")} secureTextEntry={this.state.hidePassword}/>
                            <TouchableOpacity style={{position:"absolute", right:10, top:15}} onPress={() => {this.setState({hidePassword: !this.state.hidePassword})}}>
                                {this.state.hidePassword ?
                                    <Icon name="eye" size={20}/>
                                    :
                                    <Icon name="eye-slash" size={20}/>
                                    }
                            </TouchableOpacity>
                            {(errors.sifre) && <Text style={{color:"red"}}>{errors.sifre}</Text>}
                        </View>
                        <View style={style.item}>
                            <Picker
                                selectedValue={Cinsiyet}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setSelectedLanguage(itemValue)
                                }>
                                <Picker.Item label="Erkek" value="0" />
                                <Picker.Item label="Kadın" value="1" />
                            </Picker>
                        </View>
                    </View>
                        
                    <View style={style.item}>
                        <TouchableOpacity style={style.button} onPress={handleSubmit}>
                            <Text style={style.button_text}>Üye Ol</Text>
                        </TouchableOpacity>
                    </View>
                </View>)}
                </Formik>
            </ScrollView>
        )
    }
}
