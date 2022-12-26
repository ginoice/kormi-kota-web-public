<template>
  <div class="cards-wrapper">

    <img class="cards-wrapper__img" src="@/assets/images/home/cards/circle-big.svg" alt="">
    <img class="cards-wrapper__img-circle" src="@/assets/images/home/cards/circle.svg" alt="">

    <img class="cards-wrapper__img-mob" src="@/assets/images/home/cards/circle-big.svg" alt="">
    <img class="cards-wrapper__img-circle-mob" src="@/assets/images/home/cards/middle-circle.svg" alt="">
    <img class="cards-wrapper__img-mob-right" src="@/assets/images/home/cards/circle-big.svg" alt="">
    <img class="cards-wrapper__img-circle-mob-min" src="@/assets/images/home/cards/circle.svg" alt="">

  <div class="cards__inner">

    <template
      v-for="(card, index) in dataCards"
      :key="index"
    >
    <card-component
      @onScrollToTableComponent="scrollToTable"
      class="card"
      :id="card.id"
      :title="card.title"
      :icons="card.icons"
      :price="card.price"
      :description="card.description"
      :list="card.list"
      :btnPrice="card.btnPrice"
    />
    </template>
  </div>
  </div>
</template>

<script>
import { computed, inject, onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
import CardComponent from './card.vue'

export default {
  name: 'CardsWrapperComponent',
  components: { CardComponent },

  setup () {
    /// Эти элементы нужны для взаимодействия для таблицей в конте страницы
    let ordinary = inject('ordinary')
    let rare = inject('rare')
    let elite = inject('elite')
    let table = inject('table')
    ///

    const store = useStore()
    // const statusConnectWallet = computed(() => store.getters.getStatusConnectWallet)

    const dataCards = ref([
      {
        id: 'conventional',
        title: 'обычный котик',
        icons: [require('@/assets/images/home/cards/ordinary-1.png'), require('@/assets/images/home/cards/ordinary-2.png')],
        price: {
          bnb: computed(() => store.getters.getPriceСonventional.conventional),
          mint: computed(() => store.getters.getPriceСonventional.conventionalMint),
          total: computed(() => store.getters.getPriceСonventional.conventionalTotal),
          rub: '100'
        },
        description: 'Уникальные атрибуты у обычного котика встречаются нечасто, но шанс получить вкусный подарок или неплохую скидку есть',
        list: ['Филадельфия с лососем', 'Снежная Калифорния', 'Скидка 300 руб'],
        btnPrice: '0.007',
      },
      {
        id: 'rare',
        title: 'редкий котик',
        icons: [ require('@/assets/images/home/cards/rare-1.png'), require('@/assets/images/home/cards/rare-2.png')],
        price: {
          bnb: computed(() => store.getters.getPriceСonventional.rare),
          mint: computed(() => store.getters.getPriceСonventional.rareMint),
          total: computed(() => store.getters.getPriceСonventional.rareTotal),
          rub: '500'
        },
        description: 'Много подарков и значительная помощь животным',
        list: ['Филадельфия с лососем', 'Поке с лососем', 'Скидка 700 руб'],
        btnPrice: '0.033',
      },
      {
        id: 'elite',
        title: 'чумачечий котик',
        icons: [ require('@/assets/images/home/cards/plagued-1.png'), require('@/assets/images/home/cards/plagued-2.png')],
        price: {
          bnb: computed(() => store.getters.getPriceСonventional.elite),
          mint: computed(() => store.getters.getPriceСonventional.eliteMint),
          total: computed(() => store.getters.getPriceСonventional.eliteTotal),
          rub: '1000'
        },
        description: `Котики с редкими атрибутами и крутыми подарками`,
        list: ['3 больших пиццы', 'Сет на двоих', 'Скидка 1000 руб'],
        btnPrice: '0.067',
      }
    ])

    // const payment = (typeCard, data) => {
    //   if (statusConnectWallet.value) {
    //     if (typeCard.getAttribute('id') === 'conventional') {
    //       store.dispatch('buyToken', {name: 1, price: data.price})
    //     } else if (typeCard.getAttribute('id') === 'rare') {
    //       store.dispatch('buyToken', {name: 3, price: data.price})
    //     } else if (typeCard.getAttribute('id') === 'elite') {
    //       store.dispatch('buyToken', {name: 2, price: data.price})
    //     }
    //   } else {
    //     store.dispatch('connectWallet')
    //   }
    // }

    const scrollToTable = (name) => {
      if(name === 'conventional') {
        ordinary.value = true
        rare.value = false
        elite.value = false

        table.value.scrollIntoView({block: "start", behavior: "smooth"})
      }
      if(name === 'rare') {
        rare.value = true
        ordinary.value = false
        elite.value = false
        table.value.scrollIntoView({block: "start", behavior: "smooth"})
      }
      if(name === 'elite') {
        elite.value = true
        ordinary.value = false
        rare.value = false
        table.value.scrollIntoView({block: "start", behavior: "smooth"})
      }
    }

    onMounted(() => {
      store.dispatch('tokenLevelPriceСonventional')
    })

    return { dataCards, scrollToTable }
  }
}

</script>

<style lang="scss" scoped>
.ff {
  position: relative;
  z-index: 300;
}
.cards-wrapper {
  position: relative;
  margin-top: 200px;
  margin-bottom: 290px;

  @media screen and (max-width: 375px) {
    margin-top: 100px;
  }

  &__img {
    position: absolute;
    top: -70%;
    right: -10%;

    max-width: 600px;
    width: 100%;

    @media screen and (max-width: 1366px) {
      top: -32%;
      max-width: 400px;
    }

    @media screen and (max-width: 930px) {
      top: -49%;
      right: -20%;
      transform: rotate(25deg);
    }

    @media screen and (max-width: 730px) {
      top: -55%;
      right: -30%;
      transform: rotate(8deg);
    }

    @media screen and (max-width: 700px) {
      top: -38%;
      right: -30%;
      transform: rotate(8deg);
    }

    @media screen and (max-width: 600px) {
      top: -38%;
      right: -40%;
      transform: rotate(15deg);
    }

    @media screen and (max-width: 480px) {
      top: -38%;
      right: -60%;
      transform: rotate(30deg);
    }

    @media screen and (max-width: 375px) {
      top: -38%;
      right: -44%;
      transform: rotate(6deg);
      max-width: 294px;
    }
  }

  &__img-circle {
    position: absolute;
    max-width: 400px;
    bottom: 0;
    left: 0;
    transform: translate(0, 50%);

    @media screen and (max-width: 750px) {
      display: none;
    }
  }
}

.cards__inner {
  position: relative;
  z-index: 20;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .card {
    @media screen and (max-width: 1050px) {
      &:nth-child(1) {
        grid-column: 1/4;
      }
      &:nth-child(2) {
        grid-column: 4/7;
      }

      &:nth-child(3) {
        grid-column: 2/6;
      }
    }
    @media screen and (max-width: 700px) {
      &:nth-child(1) {
        grid-column: auto;
      }
      &:nth-child(2) {
        grid-column: auto;
      }

      &:nth-child(3) {
        grid-column: auto;
      }
    }
  }
}

.cards-wrapper__img-mob {
  position: absolute;

  display: none;

  @media screen and (max-width: 835px) {
    display: block;
    top: 0;
    left: -40%;

    width: 300px;

    transform: rotate(80deg);
  }

  @media screen and (max-width: 423px) {
    width: 190px;
  }
}

.cards-wrapper__img-circle-mob {
  position: absolute;

  display: none;

  @media screen and (max-width: 700px) {
    display: block;

    bottom: 20%;
    left: -20%;

    width: 300px;
  }

  @media screen and (max-width: 530px) {
    bottom: 15%;
    left: -40%;
  }

  @media screen and (max-width: 400px) {
    bottom: 15%;
    left: -60%;
  }
}

.cards-wrapper__img-mob-right {
  position: absolute;
  display: none;

  @media screen and (max-width: 530px) {
    display: block;

    top: 55%;
    right: -30%;
    width: 200px;
    transform: rotate(-100deg);
  }

  @media screen and (max-width: 400px) {
    top: 55%;
    right: -60%;
  }
}

.cards-wrapper__img-circle-mob-min {
  position: absolute;
  display: none;

  @media screen and(max-width: 400px) {
    width: 200px;
    display: block;
    top: 30%;
  }
}
</style>
