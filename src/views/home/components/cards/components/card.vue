<template>
  <div :class=" openModal? 'body__card card' : 'body__card card card--hover'">
    <div>
      <h6 class="card__title">{{ title }}</h6>
      <div class="card__icons">
        <img
          v-for="(icon, index) in icons"
          :key="index"

          class="card__icon-cat"
          :src="icon"
          alt=""
        >
      </div>

      <div class="card__price price">
        <span class="price__bnb">{{priceBnb}} BNB</span>
        <span class="price__rub"> &#160; (~{{price.rub}} рублей)</span>
      </div>

      <p class="card__description">
        {{description}}
      </p>
    </div>

    <div>
      <ul class="card__list list">
        <li class="list__title">Какой подарок можно получить:</li>

        <li
          v-for="(item, index) in list"
          :key="index"
          class="list__item">
          {{ item }}
        </li>
      </ul>


      <a @click="$emit('onScrollToTableComponent', id)" class="card__link">
        Посмотреть все подарки
      </a>

      <button @click="openModal = true" :id="id" class="button" type="button">
        {{'Купить за '+ price.rub + ' руб'}}
      </button>

      <span class="total">
        Осталось {{ price.total - price.mint ?  price.total - price.mint : 0 }} из {{price.total ? price.total : 0 }}
      </span>
    </div>

      <ModalComponent
    @hModal="openModal = false"
    @hiddenModal="openModal = false"
    :price="price.rub"
    :activeModal="openModal"
  />
  </div>


</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import ModalComponent from './modal.vue'

export default {
  name: 'CardComponent',
  components: { ModalComponent },
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Lorem'
    },
    icons: {
      type: Array,
      default: () => []
    },
    price: {
      type: Object,
      default: () => {}
    },
    description: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    btnPrice: {
      type: String,
      default: ''
    },
    total: {
      type: String,
      default: ''
    }
  },

  setup (props) {
    const openModal = ref(false)

    const priceBnb = computed(() => {
      if (props.price.bnb) return props.price.bnb
      else return '0'
    })

    return {
      priceBnb,
      openModal
    }
  }
}

</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  padding: 33px 0 33px 33px;

  background: rgba( 255, 255, 255, 0.25 );
  // backdrop-filter: blur( 3px );
  // -webkit-backdrop-filter: blur( 3px );
  border: 6px solid #000000;
  border-radius: 32px;

  &__title {
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    color: #000000;
    margin-bottom: 29px;
    list-style: none !important;
    text-decoration: none;
  }

  &__icons {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }

  &__icon-cat {
    max-width: 190px;
    width: 100%;
    border-radius: 15px;

    & + & {
      margin-left: 16px;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #000000;
    max-width: 303px;

    margin: 34px 0 37px 0;
  }

  &__link {
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    text-decoration-line: underline;
    color: #000000;
    margin: 32px 0 39px 0;
    cursor: pointer;
  }
}

.card--hover {
  transition: .3s all;

  @media (any-hover: hover) {
    &:hover {
      transform: scale(1.01);
    }
  }
}
.price {
  display: flex;
  align-items: center;

  margin-top: 21px;

  &__bnb, &__rub {
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #000000;
  }
}

.list {
  &__title {
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 132%;
    color: #000000;
    margin-bottom: 32px;
    list-style: none;
  }

  &__item {
    font-family: 'RussoOne', sans-serif;
    list-style-type:disc;
    font-weight: 400;
    font-size: 16px;
    line-height: 132%;
    color: #000000;
    margin-left: 18px;
  }
}

.button {
  padding: 17px 5px 20px 5px;
  width: 90%;
  background: #000000;
  border-radius: 12px;

  color: #fff;
  font-family: 'RussoOne', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  text-align: center;

  transition: .2s all;

  &:active {
    transform: scale(0.9);
  }
}

.total {
  display: inline-block;
  width: 90%;
  margin-top: 15px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: rgba(0, 0, 0, 0.35);
}

</style>
