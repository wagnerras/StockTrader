//import stocks from '../../data/stocks'
import stocks from '@/data/stocks' //caminho absoluto a partir do src

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks){
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({commit}, order){
            commit()
        },
        initStocks({commit}){
            commit('setStocks', stocks)
        }
    },
    getters: {
        stocks(state){
            return state.stocks
        }
    }
}