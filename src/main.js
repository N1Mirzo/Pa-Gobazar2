import Vue from 'vue'
import './plugins/axios' // com apenas esse import o axios é plugado no vue
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'
import store from './store/store'

Vue.filter('moeda', valor => {
    return valor.toLocaleString("pt-BR", { 
        minimumFractionDigits: 2 , 
        style: 'currency', 
        currency: 'BRL' 
    })
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
