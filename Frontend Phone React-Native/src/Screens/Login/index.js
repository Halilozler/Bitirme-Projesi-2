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
import { Formik } from 'formik';
import * as Yup from 'yup';
import { login as style} from "../../Style";
import userService from '../../../_service/userService';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hidePassword:true,
        }
    }
    _PostMetoto  = async (data) => {
        
        const _userService = new userService();
        await _userService.get_Giris(data, this.props.navigation);

        /* https://192.168.1.100:7257/api/GirisUye/Giris/123/3
        // https://localhost:7257/api/GirisUye/Giris/123/3
        await axios.get("https://halilozler.com.tr/api/GirisUye/Giris/123/3").then((res) => console.log(res.data)).catch((err) => console.log(err));
        
        https://jsonplaceholder.typicode.com/posts
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => console.log(res.data)).catch((err) => console.log(err));*/
    }
    render(){
        return(
            <ScrollView>
                    <View>
                        <Text style={style.login_Text}>Giriş Yap</Text>
                    </View>
                    <View style={style.Logo}>
                        <Image style={{height:200, width:200}} source={{uri:'https://am3pap006files.storage.live.com/y4m7Mq2ZtOiwOZh4Jka2F66XTyOwtKo5IIKBDAjMIAQcbCHcmxlW_kXLp5zjbNAMBzCVHUN41TNBu9UGOw4BYO9PvYdUzNMUwHe8XwxIPOx7DWmBXOPD4yCP5rcJ-R-H-YWFoNm8JGffFBj17EDjdcHuJI8yTUoM8t4zOvErhHwHpxiyvuClHrplGxbp4E21LkabCaIlTjiC26u4xNOO4Vl0mSgWZEskQfAxgnwZ6GRAow?encodeFailures=1&width=891&height=891'}}/>
                    </View>

                    <Formik
                        initialValues={{
                            kullanici_Adi:"",
                            Sifre:""
                        }}
                        onSubmit={this._PostMetoto}
                        validationSchema={Yup.object().shape({
                            kullanici_Adi:Yup.string().required("Kullanıcı Adı gereklidir"),
                            Sifre:Yup.string().required("Şifre gerekli")
                        })}
                        >
                        {({
                                values, 
                                handleSubmit,
                                handleChange,
                                errors
                        }) => (
                        <View style={style.board}>
                            <View style={style.item}>
                                <TextInput placeholder='Kullanıcı Adı' style={style.input} value={values.kullanici_Adi} onChangeText={handleChange("kullanici_Adi")}/>
                                {(errors.kullanici_Adi) && <Text style={{color:"red"}}>{errors.kullanici_Adi}</Text>}
                            </View>
                            <View style={style.item}>
                                <TextInput placeholder='Şifre' style={style.input} value={values.Sifre} onChangeText={handleChange("Sifre")} secureTextEntry={this.state.hidePassword}/>
                                <TouchableOpacity style={{position:"absolute", right:10, top:15}} onPress={() => {this.setState({hidePassword: !this.state.hidePassword})}}>
                                    {this.state.hidePassword ?
                                    <Icon name="eye" size={20}/>
                                    :
                                    <Icon name="eye-slash" size={20}/>
                                    }
                                </TouchableOpacity>
                                {(errors.Sifre) && <Text style={{color:"red"}}>{errors.Sifre}</Text>}
                            </View>
                            <View style={style.item}>
                                        <TouchableOpacity style={style.button} onPress={handleSubmit}>
                                            <Text style={style.button_text}>Giriş Yap</Text>
                                        </TouchableOpacity>
                                    </View>
                        </View>)}
                    </Formik>

                    <View style={[style.item]}>
                                <TouchableOpacity style={{ justifyContent:'center',alignItems:'center'}} onPress={() => this.props.navigation.navigate("Register")}>
                                    <Text style={{ fontSize:17,fontWeight:'500',color:'#525464'}}>Hesabın yok mu? <Text style={{ color:'#FFB19D',fontWeight:'700'}}>Üye Ol</Text></Text>
                                </TouchableOpacity>
                    </View>
                    
            </ScrollView>
        )
    }
}
