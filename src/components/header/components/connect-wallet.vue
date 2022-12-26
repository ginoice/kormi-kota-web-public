<template>
  <button
    @click="connectWallet()"
    type="button"
    class="botton"
  >
    {{status ? 'кошелёк подключен' : 'подключить кошелёк'}}
  </button>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'ConnectWalletBtnComponent',

  setup () {
    const store = useStore()
  
    const connectWallet = () => {
      store.dispatch('connectWallet')
    }

    return {
      connectWallet,
      status: computed(() =>  store.getters.getStatusConnectWallet)
    }
  }
}

</script>

<style lang="scss" scoped>
.botton {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #000;
}
</style>
