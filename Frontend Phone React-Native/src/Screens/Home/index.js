import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    Text,
    ScrollView
} from 'react-native';
import { bar as style_bar} from "../../Style";
import { menu as style} from "../../Style";
import Alt from '../Menu/alt';
import homeService from '../../../_service/homeService';
import { Item } from "./Item";
import axios from 'axios';
import { observer } from "mobx-react";
import MainStore from '../../Store/MainStore';

@observer
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            veri: [],
        };
    }

    componentDidMount = async() =>{
        this.getVeri();
        this.onLoad()
    }

    onLoad = () => {
        this.props.navigation.addListener('didFocus', () => this.getVeri());
        }

    getVeri = async() => {
        await axios.get("https://halilozler.com.tr/api/home/anasayfa/" + MainStore.getUser_id()).then((res) => {MainStore.setPost(res.data,0)}).catch((err) => console.log(err));

        this.setState({veri: MainStore.getPost()});
        //console.log(veri);
    }

    _renderItem = ({item}) => {
        MainStore.setNav(this.props.navigation);
        return <Item item={item}/>
    }

    render(){
        return(
            <View style={{height:"100%"}}>
                <ScrollView>
                    <FlatList
                        data={MainStore.getPost()}
                        keyExtractor={item => item.post_id}
                        renderItem={this._renderItem}
                        ListEmptyComponent={() => <View><Text>Veri Yok </Text></View>}
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