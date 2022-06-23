import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStore from "../src/Store/MainStore.js";


export default class userService{
    link = "https://halilozler.com.tr/api/";
    veri = {
        id:0,
        Ad:"",
        Soyad:"",
        cinsiyet:true,
        kullanici_Adi:"",
        sifre:"",
        puan:0,
        resim_id:1
    };
    

    get_Giris =  async(data, navigation) => {
        await axios.get(this.link + "GirisUye/Giris/"  + data.kullanici_Adi + "/" + data.Sifre).then((res) => { this.veri = res.data}).catch((err) => console.log(err));

        if(this.veri.id != 0){
            await AsyncStorage.setItem("id", this.veri.id.toString());
            await MainStore.setUser_id(this.veri.id.toString());
            navigation.navigate('App');
        }
    }

    Post_Register = async(data, navigation) => {
        let number = 0;
        await axios.post(this.link + "GirisUye/Uye", data)
        .then((res) => 
        {
            alert("Üye olundu");
            number = 1;
        }).catch((err) => console.log(err));

        if(number == 1){
            await axios.get(this.link + "GirisUye/GirisKullaniciAdi/" + data.kullanici_Adi).then((res) =>{
                AsyncStorage.setItem("id", res.data.id.toString());
                MainStore.setUser_id(res.data.id.toString());
                navigation.navigate('App');
            });
        }
    }
}