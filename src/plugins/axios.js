import Vue from 'vue'
import axios from 'axios'

/*  
Vue.use() espera que seja passado um vue-plugin como parametro.
O Axios não é um plugin vue. Assim devemos simular a instalação de um plugin
*/
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            // url base de acesso do axios
            // nesse caso será a url da base hospedado no firebase
            baseURL: 'https://stock-trader-f6550.firebaseio.com/'
        })
    }
})