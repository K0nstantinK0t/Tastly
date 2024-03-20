import store from "@/store.js";
import axios from "axios";
import config from "@/config.js";
export default {
    goToUserCabinet: function(router){
        if(store.role === 'admin') {
            console.log('you admin')
            router.push({ name: 'adminPanel' })
            return
        }
        if(store.role === 'user') {
            router.push({name: 'pc'})
            return
        }
        router.push({ name: 'registration' })
    },
    logOut: function(router){
        axios.post(config.logOutUrl)
        store.token=''
        store.role='guest'
        router.push({name: 'index'})
    },
    goToMenu: function (router){
        if(store.role === "admin"){
            router.push({name: 'adminMenu'})
            return
        }
        router.push({name: 'menu'})
    }
}
