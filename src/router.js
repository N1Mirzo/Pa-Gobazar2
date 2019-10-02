import Vue from 'vue'
import Router from 'vue-router'

// registrar o Router no vue
Vue.use(Router)

// importando os componentes base
import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

// exporta uma nova instancia com as configurações
export default new Router({
    // mode history, tira # das URIs de navegação
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },

        // Caso  tentem acessar uma rota não mapeada, volta a home
        { path: '*', component: Home }, 
    ]
})