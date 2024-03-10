import store from "@/store.js";
import axios from "axios";
import config from "@/config.js";
export default {
    goToUserCabinet: function(router){
        console.log(store.role)
        if(store.role === 'admin') {
            console.log('you admin')
            router.push({ name: 'adminPanel' })
            return true;
        }
        if(store.role === 'user') {
            router.push({name: 'pc'})
            return true
        }
        router.push({ name: 'registration' })
        return true
    },
    logOut: function(router){
        axios.post(config.logOutUrl)
        store.token=''
        store.role='guest'
        router.push({name: 'index'})
    }
}
