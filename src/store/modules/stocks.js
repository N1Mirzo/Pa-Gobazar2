// stocks de data, exporta apenas uma array de acoes
import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    getters: {
        // retorna as acoes disponiveis para compra
        stocks(state) {
            return state.stocks
        }
    },
    // por convenção; as mutations devem ser SÍNCRONAS
    mutations: {
        // setStocks sera chamada pela action initStocks
        setStocks(state, payload) {
            state.stocks = payload
            // Vue-Tools 
            // console.log('stocks', state.stocks)
        },
        randomizePrices(state) {
            state.stocks.forEach(element => {
                element.price = Math.round(element.price) * (1 + (Math.random() - 0.47))
            })
        }
    },
    // tambem, por convenção; as actions podem ou não serem ASSÍNCRONAS
    actions: {
        // initStocks sera chamada ao estagio created() do component
        // App.vue
        initStocks({ commit }) {
            commit('setStocks', stocks)
        },
        // as actions são acionadas pelo dispatch
        buyStock({ commit }, order) {
            // o commit, chama metodos mutations

            // chama uma mutations 'buyStock' em portfolio;
            // vale lembrar que mutations são setters
            commit('buyStock', order)
        },
        randomizePrices({ commit }){
            // setTimeout(() => {
                commit('randomizePrices')
            // }, 500)
        }
    }
}