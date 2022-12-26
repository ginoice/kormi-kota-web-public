<template>
  <main class="wrapper">
    <header-component />
      <section class="user-cats">
        <img class="icon-left" src="@/assets/images/user-cats/left.svg" alt="">
        <div class="container">
          <div class="user-cats__body body">

            <h1 @click="foo" class="body__title">
              мои котики
            </h1>

            <p>Тут Вы можете получить подарки за купленный NFT. Укажите номер телефона, на который мы отправим смс с промокодами.</p>
            <p>Для получения подарка нужно ввести промокод при заказе в
              <a
                href='https://ml.onelink.me/DVTa/nft'
                target="_blank"
                style="
                  color: #000;
                  text-decoration: underline;
                "
              >мобильном приложении Много Лосося</a></p>
            <div v-if="1" class="body__cards">
              
              <template
                v-for="(token, id) in tokenData"
                :key="id"
              >
                <cat-user-components
                  :title="token?.metadata.name"
                  :img="token?.metadata.image"
                  :attributes="token?.metadata.attributes"
                  :present="token?.present"
                  :dataToken="token"
                />

              </template>

            </div>
          </div>
        </div>
      </section>
    <div ref="footer">
    <footer-component />
    </div>
  </main>
</template>

<script>
import HeaderComponent from '@/components/header'
import CatUserComponents from './components/cat-user.vue'
import FooterComponent from '@/components/footer'

import { useStore } from 'vuex'
import { computed, onMounted, provide, ref } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
  name: 'UserCatsPage',
  components: { HeaderComponent, CatUserComponents, FooterComponent },

  setup () {
    const store = useStore()
    const router = useRouter()
    const tokenData = computed(() => store.getters.getTokenData)
    const statusConectWallet = computed(() => store.getters.getStatusConnectWallet)

    const footer = ref()

    provide('FooterUserCats', footer)

    const foo = () => {
      console.log(tokenData.value)
    }

    onMounted(() => {
      if (statusConectWallet.value === true) store.dispatch('tokensOfOwner')
      else router.push({name: 'home'})
    })

    return {foo, tokenData, footer}
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
}
.user-cats {

  position: relative;
  min-height: 100vh;
}

.body {
  position: relative;
  z-index: 10;

  padding: 67px 0 132px 0;

  &__title {
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 120%;
    color: #000;

    @media screen and (max-width: 432px) {
      font-size: 60px;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin-top: 80px;

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 20px;
    }
  }
}

.icon-left {
  position: absolute;
  top: 25%;
  left: 0;
}

.icon-right {
  position: absolute;
  top: 25%;
  right: 0;
}

</style>
