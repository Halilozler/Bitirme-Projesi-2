import { observable, action, makeObservable } from "mobx";

class MainStore{
    
    @observable multi_post = [];
    @observable navigator;
    @observable post_id;
    @observable user_id;
    @observable user_Profil;

    constructor(){
        makeObservable(this);
    }

    @action getPost(){
        return this.multi_post;
    }

    @action setPost(post, tur){
        if(tur == 1){
            this.multi_post.push(post);
        }
        else{
            this.multi_post = post;
        }
    }

    @action getNav(){
        return this.navigator;
    }

    @action setNav(navigator){
        this.navigator = navigator;
    }

    @action getPost_id(){
        return this.post_id;
    }

    @action setPost_id(post_id){
        this.post_id = post_id;
    }

    @action getUser_id(){
        return this.user_id;
    }

    @action setUser_id(user_id){
        this.user_id = user_id;
    }

    @action deleteUser_id(){
        this.user_id = null;
    }

    @action getUser_Profil(){
        return this.user_Profil;
    }

    @action setUser_Profil(id){
        this.user_Profil = id;
    }
}

export default new MainStore();