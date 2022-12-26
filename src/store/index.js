import { createStore } from 'vuex'

import fetch from './module/fetch'
import wallet from './module/wallet'
import contract from './module/contract'
import userCards from './module/userCards'

export default createStore({
  modules: {
    fetch,
    wallet,
    contract,
    userCards
  }
})
