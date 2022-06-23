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
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { observer } from "mobx-react";
import MainStore from '../../Store/MainStore';

@observer
export default class Alt extends React.Component{
    constructor(props){
        super(props);
    }
    setMesaj = async(data) => {
        data.kim_olusturdu_User_id = await AsyncStorage.getItem("id");
        await axios.get("https://halilozler.com.tr/api/home/ekle/" + data.kim_olusturdu_User_id + "/" + data.yazi)
        .then((res) => {
            alert("Paylaşıldı"); this.props.navigation.navigate("Home");
        }).catch((err) => console.log(err));
    }
    render(){
        return(
            <View>
                <Formik
                    initialValues={{
                        yazi:"",
                    }}
                    onSubmit={this.setMesaj}
                    validationSchema={Yup.object().shape({
                        yazi:Yup.string().required()
                    })}
                    >
                        {({
                                values, 
                                handleSubmit,
                                handleChange
                        }) => (
                    <View>
                        <View style={style.input}>
                            <TextInput placeholder='Hayvanlara yardım için mesajınızı girin ve paylaşın.' value={values.yazi} onChangeText={handleChange("yazi")}/>
                        </View>
                        <View style={style.button}>
                            <TouchableOpacity onPress={handleSubmit}>
                                <Icon name='share' size={40}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    )}
                </Formik>
            </View>
        )
    }
}

const style = StyleSheet.create({
    input:{
        height:"100%",
        borderWidth:1,
        borderColor:"black"
    },
    button:{
        position:"absolute",
        right:10,
        bottom:10,
        borderRadius:10,
        borderColor:"black",
        borderWidth:1
    }
});