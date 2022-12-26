import { wallet } from '@/lib/wallet/index'

export default {
  actions: {
    async balanceContract (ctx) {
      const balanceContract = await wallet.getBalanceContract()
      ctx.commit('setBalanceContract', balanceContract)
    },

    async tokenLevelPriceСonventional (ctx) {
      const price = await wallet.getTokenLevelPrice()
      ctx.commit('setTokenLevelPriceСonventional', price)
    },

    async buyToken (ctx, data) {
      wallet.buyToken(data)
    }
  },


  mutations: {
    setBalanceContract (state, balance) {
      state.balanceContract = `${balance}`
    },

    setTokenLevelPriceСonventional (state, price) {
      state.priceСonventional = price
    }
  },


  state: {
    balanceContract: 0,
    priceСonventional: 0
  },


  getters: {
    getBalanceContract (state) {
      return state.balanceContract
    },

    getPriceСonventional (state) {
      return state.priceСonventional
    }
  }
}