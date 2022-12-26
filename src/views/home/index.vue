<template>
  <section class="home">
    <header-component />
    <banner-component />
    <cards-component ref="cards" />
    <goals-component @onScrollToFAQ="scrollToFAQ()" />
    <present-component @onClick="func()" />
    <roulette-component />
    <div ref="info">
      <info-component />
    </div>

    <section ref="table" class="table">
      <table-component />
    </section>

    <div ref="footer">
      <footer-component />
    </div>
  </section>
</template>

<script>
import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'

import BannerComponent from './components/banner.vue'
import CardsComponent from './components/cards'
import PresentComponent from './components/present.vue'
import InfoComponent from './components/info.vue'
import GoalsComponent from './components/goals'
import RouletteComponent from './components/roulette'
import TableComponent from './components/table'
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    BannerComponent,
    CardsComponent,
    PresentComponent,
    InfoComponent,
    GoalsComponent,
    RouletteComponent,
    TableComponent,
    FooterComponent
  },

  setup () {
    const cards = ref(null)
    const info = ref()
    const footer = ref(null)
    

    provide('CardsComponent', cards)
    provide('FooterComponent', footer)

    ///////

    /// --- ссылка на компонент
    const table = ref(null)

    const ordinary = ref(true)
    const rare = ref(false)
    const elite = ref(false)

    provide('ordinary', ordinary)
    provide('rare', rare)
    provide('elite', elite)
    provide('table', table)
    //////



    

    const func = () => {
      table.value.scrollIntoView({ block: "center", behavior: "smooth" })
    }
    const scrollToFAQ = () => {
      info.value.scrollIntoView({ block: "center", behavior: "smooth" })
    }

    return { func, table, cards, info, scrollToFAQ, footer }
  }
}

</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  overflow: hidden;
}
</style>
