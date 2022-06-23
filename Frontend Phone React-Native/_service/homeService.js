import axios from "axios";

export default class homeService{
    link = "https://halilozler.com.tr/api/home/";
    constructor(veri){
        this.veri = veri;
    }

    get_homePage = async() => {
        await axios.get(this.link + "anasayfa").then((res) => {this.veri = res.data;}).catch((err) => console.log(err));
        return this.veri.json;
    }

    getSinglePost = async(post_id) => {
        await axios.get(this.link + "getPost/" + post_id).then((res) => this.veri = res.data).catch((err) => console.log(err));
        return(this.veri);
    }

    getUserPost = async(user_id) => {
        await axios.get(this.link + "getUserPost/" + user_id).then((res) => this.veri = res.data).catch((err) => console.log(err));
        return(this.veri);
    }

    Begen = async(post_id, kim_begendi_user_id) => {
        await axios.get(this.link + "begen/" + post_id + "/" + kim_begendi_user_id).then((res) => console.log("beğenildi")).catch((err) => console.log(err));
    }

    getYorum = async(post_id) => {
        await axios.get(this.link + "yorumlar/" + post_id).then((res) => this.veri = res.data).catch((err) => console.log(err));
        return(this.veri);
    }

    getBildirim = async(user_id) => {
        await axios.get(this.link + "bildirim/" + user_id).then((res) => this.veri = res.data).catch((err) => console.log(err));
        return(this.veri);
    }

    postPaylas = async(ekle) => {
        await axios.post(this.link + "ekle",ekle).then((res) => console.log("paylaşıldı")).catch((err) => console.log(err));
    }

    yorumYap = async(yorum) => {
        await axios.post(this.link + "yorumYap",yorum).then((res) => console.log("Yorum Yapıldı")).catch((err) => console.log(err));
    }
}