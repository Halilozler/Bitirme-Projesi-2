import React from "react";
import { Text, View, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
import { menu as style} from "../../Style";
import MainStore from "../../Store/MainStore";
import axios from "axios";

export const Item = ({item}) => {
    const[begendi, setBegendi] = React.useState(item.begendi);
    const[sayi, setSayi] = React.useState(item.begeni_sayisi);
    const[puan, setPuan] = React.useState(item.puan);

    const press = () => {
        const nav = MainStore.getNav();
        MainStore.setPost_id(item.post_id);
        nav.navigate("SinglePost");
    }

    const _pressProfil = () => {
        const nav = MainStore.getNav();
        MainStore.setUser_Profil(item.user_id);
        nav.navigate("Profil");
    }

    const _begenme = () => {
        axios.get("https://halilozler.com.tr/api/home/begen/" + item.post_id + "/" + MainStore.getUser_id())
        .then((res) => {
            alert("Beğenildi");
            setBegendi(true);
            setSayi(sayi + 1);
            setPuan(puan + 1);
        }).catch((err) => console.log(err));
    }

    return(
        <View style={style.post}>
                    <TouchableOpacity onPress={_pressProfil}>
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
                    </TouchableOpacity>
                        <View>
                            <Text style={style.text}>{item.yazi}</Text>
                        </View>
                        <View style={{marginTop:5, flexDirection:"row"}}>
                            <TouchableOpacity onPress={press}>
                                <Text>Yorumlar({item.yorum_sayisi})</Text>
                            </TouchableOpacity>
                            {begendi ? 
                                <Text style={{position:"absolute", right:5}}>
                                    <Icon name={'heart'} solid color={"red"}/> {(sayi)}
                                </Text>
                                :
                                <TouchableOpacity style={{position:"absolute", right:5}} onPress={_begenme}>
                                    <Text>
                                        <Icon name={'heart'} light/> {(sayi)}
                                    </Text>
                                </TouchableOpacity>
                            }
                        </View>
        </View>
    )
};