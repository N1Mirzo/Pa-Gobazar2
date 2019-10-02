export default {
    state: {
        funds: 10000,
        stocks: []
    },
    getters: {
        // para acessar o saldo é necessario um getter que sera
        // mapeado em uma propriedade computada
        funds(state) {
            return state.funds
        },
        /* Extremamente didatico */
        // o array de stocks do portfolio possui infomações de id, e quantidade
        // que um usuário possui. 
        // Uma maneira de recuperar os dados das ações é buscando pelo getters
        // a ação necessária
        stocksPortfolio(state, getters){
            return state.stocks.map(stock => {
                const res = getters.stocks.find(e => e.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    price: res.price,
                    name: res.name
                }
            })
        }
    },
    mutations: {
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds
            state.stocks = portfolio.stocksPortfolio ? portfolio.stocksPortfolio : []
        },
        // buyStock é setter de portfolio
        buyStock(state, order) {
            // verifica se o usuário já possui ações desta empresa
            const res = state.stocks.find(e => e.id == order.id)

            if(res) {
                // atualiza a quantidade das ações em posse
                res.quantity += order.quantity
            } else {
                // senão registra uma nova ação no portfolio do usuário
                state.stocks.push({
                    // o id é extremamente importante para o ref. das açoes
                    id: order.id,
                    quantity: order.quantity
                    // o preço não é necessário na carteira do usuário, a menos
                    // que tenha que manter um historico do valor no momento da compra DICA!!!
                    // DIca: implementar um historico de preço da ação com gráficos!
                    // vuetify tem components de gráficos
                })
            }

            // atualiza o saldo do portfolio
            state.funds -= order.quantity * order.price
        },
        sellStock(state, order) {
            // busca nas açoes no portfolio, uma ação para venda
            const res = state.stocks.find(e => e.id == order.id)

            // se a quantidade de ações do portfolio for maior que da ordem de venda
            if(res.quantity > order.quantity) {
                // atualizar a quantidade de ações
                res.quantity -= order.quantity
            } else {
                // caso contrario, todas ações serão vendidas
                state.stocks.splice(state.stocks.indexOf(res), 1)
            }

            // atualiza somando a quantia ao saldo
            state.funds += order.quantity * order.price
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order)
        }
    }
}