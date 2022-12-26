<template>
  <nav class="nav">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :id="link.id"
      v-show="route.name != 'user-cats'"
      class="nav__link"
      :to="{name: link.disabled ? link.page : 'home'}"
      @click="scrollToBlock($event.target)"
    >
      {{ link.name === 'мои котики' ? link.disabled ? 'мои котики' : 'подключить кошелек'  : link.name }}
      <img class="img-disablid" v-if="link.name === 'мои котики' ? link.disabled ? false : true  : false " :src="require(`@/assets/images/header/icon-${index + 1}.svg`)" alt="">
      <img  v-if="link.name === 'мои котики' ? link.disabled ? true : false : true " :class="`img img-${index + 1}`" :src="require(`@/assets/images/header/icon-${index + 1}.svg`)" alt="">
    </router-link>

    <connect-wallet-btn-component
      v-show="route.name == 'user-cats'"
    />

  </nav>
</template>

<script>
import ConnectWalletBtnComponent from './connect-wallet.vue'

import { useRoute } from 'vue-router'
import { computed, inject, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'NavComponent',
  components: { ConnectWalletBtnComponent },

  setup () {
    const store = useStore()
    const route = useRoute()
    const cardsComponent = inject('CardsComponent')
    // const footerComponent = inject('FooterComponent')

    const scrollToBlock = (event) => {
      if (typeof cardsComponent.value !== 'undefined') {
        if (event.getAttribute('id') === 'buy') {
          cardsComponent.value.$el.scrollIntoView({ block: "center", behavior: "smooth" })
        }
      }
      if (event.getAttribute('id') === 'contact') {
        window.open('https://bscscan.com/address/0x18cbbe41e80474a8c91522689cf8b97dd7fedc06')
      }
      if (event.getAttribute('id') == 'user-cats') {
        if (store.getters.getStatusConnectWallet === false) {
          store.dispatch('connectWallet')
        }
      }
    }

    const links = ref([
      {
        id: 'user-cats',
        name: 'мои котики',
        page: 'user-cats',
        disabled: computed(() => store.getters.getStatusConnectWallet)
      },
      {
        id: 'buy',
        name: 'получить котика',
        page: 'home'
      },
      {
        id: 'contact',
        name: 'контракт',
        page: 'https://bscscan.com/address/0x18cbbe41e80474a8c91522689cf8b97dd7fedc06'
      }
    ])

    return { links, route, scrollToBlock }
  }
}

</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;

  &__link {
    position: relative;
    z-index: 11;

    &:nth-child(1) {
      color: #000;
      @media (any-hover: hover) {
        &:hover {
          .img-1 {
            z-index: -1;
            opacity: 1;
          }

          .img-disablid {
                        z-index: -1;
            opacity: 1;
          }
        }
      }
      @media (any-hover: hover) {
        &:hover {
          .img-1 {
            z-index: -1;
            opacity: 1;
          }
        }
      }
    }

    &:nth-child(1).nav__link-disabled {
      color: grey;
      @media (any-hover: hover) {
        &:hover {
          .img-1 {
            opacity: 0;
            z-index: -1;
          }
        }
      }
    }

    &:nth-child(2) {
      color: #000;
      @media (any-hover: hover) {
        &:hover {
          .img-2 {
            opacity: 1;
            z-index: -1;
          }
        }
      }
    }

    &:nth-child(3) {
      color: #000;
      @media (any-hover: hover) {
        &:hover {
          .img-3 {
            z-index: -1;
            opacity: 1;
          }
        }
      }
    }

    & + & {
      margin-left: 37px;
    }
  }

  @media screen and (max-width: 680px) {
    display: none;
  }
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-17%, -28%);
  transition: all .2s;
  opacity: 0;
  z-index: -1;
}

.img-disablid {
  position: absolute;
  top: 0;
  left: 0;
  width: 230px;
  transform: translate(-9%, -36%);
    transition: all .2s;
  opacity: 0;
  z-index: -1;
}
</style>
