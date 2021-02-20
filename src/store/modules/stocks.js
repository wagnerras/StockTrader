//import stocks from '../../data/stocks'
import stocks from '@/data/stocks' //caminho absoluto a partir do src

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state) {
            for (let stock of state.stocks) {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
            }
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit('buyStock', order)
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)
        },
        randomizeStocks({ commit }) {
            commit('randomizeStocks')
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}