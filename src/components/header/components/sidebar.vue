<template>
  <aside class="aside">
    <div class="aside__body">
      <!-- <img class="aside__img" src="@/assets/images/header/cat.png" alt=""> -->
      <div class="aside-wrap">
        <img @click="$emit('onClick')" src="@/assets/images/header/closes-burger.svg" alt="">
      </div>

      <ul class="list">
        <router-link
          :to="{name: 'user-cats'}"
          class="list__item"
          :class="{'list__item--dis': statusConnect !== true}"
          @click="connectWallet()"
        >
         {{statusConnect ? 'мои котики' : 'подключить кошелек' }}
        </router-link>
        <li @click="scrollToCards()" class="list__item">получить <br> котика</li>
        <li @click="scrollToFooter()" class="list__item">контракт</li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { computed, inject } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
  name: 'AsideComponent',
  setup () {
    const store = useStore()
    const route = useRoute()

    const cards = inject('CardsComponent')
    const footerComponent = inject('FooterComponent')
    // const footerCUserCat = inject('FooterUserCats')

    const statusConnect = computed(() => store.getters.getStatusConnectWallet)

    const connectWallet = () => {
      if (statusConnect.value == false) store.dispatch('connectWallet')
    }

    const scrollToCards = () => {
      if (route.name == 'home') cards.value.$el.scrollIntoView({ block: "center", behavior: "smooth" })
    }

    const scrollToFooter = () => {
       window.open('https://bscscan.com/address/0x18cbbe41e80474a8c91522689cf8b97dd7fedc06')
      // if (route.name == 'home') footerComponent.value.scrollIntoView({ block: "end", behavior: "smooth" })
      // else footerCUserCat.value.scrollIntoView({ block: "end", behavior: "smooth" })
    }

    return {
      store,
      statusConnect,
      connectWallet,
      cards,
      footerComponent,
      scrollToCards,
      scrollToFooter
    }
  }
}

</script>

<style lang="scss" scoped>

.aside {
  position: fixed;
  top: 0;
  right: 0;
  min-width: 320px;
  z-index: 1000;
  min-height: 100vh;

  padding: 36px 13px 20px 36px;
  background: #fff;

  &-wrap {
    display: flex;
    justify-content: flex-end;

    margin-bottom: 50px;
  }

  &__body {
    position: relative;
    min-height: 100%;
  }

  // &__img {
  //   position: absolute;
  //   bottom: 0;
  //   right: 0;
  // }
}

.list {
  list-style: none !important;

  &__item {
    color: #000;
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 100%;

    &--dis {
      opacity: 0.5;
    }

    &:nth-child(1) {
      transform: rotate(4.83deg);
    }

    &:nth-child(2) {
      transform: rotate(-4.7deg);
    }

    &:nth-child(3) {
      transform: rotate(3.27deg);
    }

    & + & {
      margin-top: 44px;
    }
  }
}
</style>
