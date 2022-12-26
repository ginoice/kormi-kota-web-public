import {wallet} from '@/lib/wallet/index'

export default {
  actions: {
    async connectWallet (ctx) {
      const res = await wallet.connectWallet()
      if (res.active == true) ctx.commit('statusConnect', true)
      else ctx.commit('statusConnect', false)
    }
  },

  mutations: {
    statusConnect (state, status) {
      state.statusConnect = status
    }
  },

  state: {
    statusConnect: false
  },
  
  getters: {
    getStatusConnectWallet (state) {
      return state.statusConnect
    }
  }
}