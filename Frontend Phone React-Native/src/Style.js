import { StyleSheet } from "react-native";

export const login = StyleSheet.create({
    login_Text:{
        textAlign:"center",
        fontWeight:"800",
        fontSize:25
    },
    resim:{
        width:200,
        height:300
    },
    Logo:{
        marginTop:10,
        alignItems:"center"
    },
    board:{
        marginTop:20,
        paddingHorizontal:30,
    },
    item:{
        marginBottom:20
    },
    item_iki:{
        width:"45%"
    },
    input:{
        backgroundColor:"#F7F7F7",
        paddingVertical:10,
        paddingHorizontal:30,
        height:50,
        borderWidth:1,
        borderColor:"black"
    },
    button:{
        backgroundColor:'#20C3AF',
        paddingVertical:20,
        justifyContent: 'center',
        alignItems:'center'
    },
    button_text:{textAlign:'center',color:'white',fontSize:17,fontWeight:'700'},
});

export const menu = StyleSheet.create({
    post:{
        marginBottom:10,
        borderBottomWidth:1,
        borderTopWidth:1,
        padding:5
    },
    profil_img:{
        borderRadius:100,
        width:50,
        height:50,
        borderColor:"black",
        borderWidth:1,
    },
    isim:{
        fontSize:20
    },
    text:{
        fontSize:18
    }
});

export const Profi = StyleSheet.create({
    profil_img:{
        borderRadius:100,
        width:60,
        height:60,
        borderColor:"black",
        borderWidth:1,
    },
    isim:{
        fontSize:17,
        fontWeight:"bold"
    },
    etkinlik_text:{
        padding:5,
        marginBottom:3
    }
});

export const bar = StyleSheet.create({
    alt:{
        position:"absolute",
        bottom:0,
        backgroundColor:"#c0c0c0",
        height:60,
        width:"100%",
        flex:1,
    },
    üst:{
        height:60,
        width:"100%",
        backgroundColor:"#c0c0c0"
    },
    alt_menu:{
        flexDirection:"row",
        justifyContent:"space-around",
    },
    alt_icon:{
        textAlign:"center",
    },
    bosluk:{
        height:50
    }
});

