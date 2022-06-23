import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { menu as style_menu} from "../../Style";
import { Profi as style_profil} from "../../Style";
import SinglePost from "../Home/SinglePost";
import MainStore from '../../Store/MainStore';
import axios from "axios";



export const Item = (props) => {
    const{item} = props;
    const _click = async() => {
        await axios.get("https://halilozler.com.tr/api/home/tiklandi/" + item.id).then().catch((err) => console.log(err));

        nav = MainStore.getNav();
        MainStore.setPost_id(item.post_id);
        nav.navigate("SinglePost");
    }

    return(
        <View>
            <TouchableOpacity onPress={_click}>
                {item.okundu ? 
                    <View style={[style_menu.post,{flexDirection:"row",marginBottom:0, backgroundColor:"#808080"}]}>
                        <View>
                            <Image style={style_profil.profil_img} source={{uri:"https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-15-512.png"}}/>
                        </View>
                        <View>
                            <Text>
                                <Text style={style_profil.isim}>{item.ad} {item.soyad} </Text> 
                                kişi {item.tur == 1 ? "beğendi" : "Yorum yaptı"}
                            </Text>
                        </View>
                    </View>
                :
                <View style={[style_menu.post,{flexDirection:"row",marginBottom:0}]}>
                    <View>
                            <Image style={style_profil.profil_img} source={{uri:"https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-15-512.png"}}/>
                        </View>
                        <View>
                            <Text>
                                <Text style={style_profil.isim}>{item.ad} {item.soyad} </Text> 
                                kişi {item.tur == 1 ? "beğendi" : "Yorum yaptı"}
                            </Text>
                        </View>
                    </View>
                }
            </TouchableOpacity>
        </View>
    )
};