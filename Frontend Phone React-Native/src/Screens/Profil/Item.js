import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
import { menu as style} from "../../Style"
import MainStore from "../../Store/MainStore";

export const Item = ({item}) => {
    
    const _press = () =>{
        let nav = MainStore.getNav();
        MainStore.setPost_id(item.post_id);
        nav.navigate("SinglePost");
    }
    return(
        <TouchableOpacity onPress={_press}>
            <View style={style.post}>
                <View>
                    <Text style={style.text}>{item.yazi}</Text>
                </View>
                <View style={{marginTop:5}}>
                    <Text>Yorumlar({item.yorum_sayisi})</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    )
};