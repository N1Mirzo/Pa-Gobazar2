import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

export default new Vuex.Store({
    state: {
        drawer: false
    },
    actions, // dessa forma loadData vira uma funcao geral da store
    modules: { 
        stocks, 
        portfolio 
    }
})