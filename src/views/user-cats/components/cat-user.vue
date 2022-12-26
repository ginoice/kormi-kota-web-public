<template>
  <div class="cat" :class="{
    'cat--nobf': active === true
  }">
    <div>
      <h3 class="cat__title">{{title}}</h3>
      <img class="cat__img" :src="img" alt="">
      

      <a :href="img" class="link__cards" target="_blank">Загрузить&nbsp;картинку</a>
      <h6 class="cat__subtitle">Подарков {{present.length}}</h6>
      

      <div class="attributes">
        <div
          v-for="(attribut, index) in attributes"
          :key="index"
          class="attributes__item"
          :class="{
            'attributes__item--bonus': attribut.presentBoolean === true
          }"
        >
          
          <p class="attributes__item-text">{{attribut.trait_type}}</p>
          <p class="attributes__item-subtext">{{attribut.value}}</p>

          <div class="attributes__present">
            <p class="attributes__item-text">
              Подарок
            </p>
            <p class="attributes__item-subtext">
              {{attribut.presentBoolean ? attribut.presentName : 'Нет'}}
            </p>
          </div>

        </div>
      </div>
    </div>

    <button
      @click="active = true"
      type="button" class="button"
      :class="{
        'button--dis': present.length !== 0 && dataToken.activeBtn === false || present.length === 0
      }"
      :disabled=" present.length !== 0 && dataToken.activeBtn === false || present.length === 0 "
    > 
      {{present.length !== 0 && dataToken.activeBtn === false ? 'Подарки получены' : present.length === 0 ? 'Нет подарков' : compiler }}
    </button>

    <modal-component
      :dataToken="dataToken"
      :activeModal="active"
      :attribut="attributes"
      @hiddenModal="active = false"
    />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ModalComponent from './modal.vue'

export default {
  name: 'CatComponent',
  components: { ModalComponent },
  props: {
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    present: {
      type: Array,
      default: () => []
    },
    attributes: {
      type: Array,
      default: () => []
    },
    compiler: {
      type: String,
      default: 'Получить подарок'
    },
    dataToken: {
      type: Object,
      default: () => {}
    }
  },

  setup (props) {
    let active = ref(false)
    let disabledBtn = ref(props.dataToken?.activeBtn)

    return { active, disabledBtn }
  },
}

</script>

<style lang="scss" scoped>
.cat {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 32px;
  border: 6px solid #000000;
  border-radius: 32px;

  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 3px );
  -webkit-backdrop-filter: blur( 3px );

  transition: transform .3s ease-in;

  @media (any-hover: hover) {
    &:hover {
      transform: scale(1.02);
    }
  }

  &--nobf {
    background: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    transition: none;

    @media (any-hover: hover) {
      &:hover {
        transform: none;
      }
    }
  }

  &__title {
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    color: #000000;
  }

  &__subtitle {
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 130%;
    color: #000000;
  }

  &__img{
    margin: 32px 0 24px 0;
    width: 100%;
    max-width: 340px;
    border-radius: 16px;
  }
}

.attributes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;

  margin-top: 20px;

  &__present {
    margin-top: 9px;
  }

  &__item {
    padding: 12px 14px;
    border: 3px solid #000000;
    border-radius: 8px;

    &--bonus {
      border: 3px solid #FF5700;
    }

    &-text, &-subtext {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 100%;
      color: #000000;
    }

    &-subtext {
      margin-top: 8px;
      font-weight: 900;
      font-size: 15px;
      line-height: 100%;
    }
  }
}

.button {
  padding: 17px;
  background-color: #000000;
  margin-top: 30px;
  border-radius: 12px;
  font-family: 'RussoOne', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;

  color: #FFFFFF;

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    opacity: 0.5;
  }
}

.link__cards {
  display: block;
  margin-bottom: 12px;
  color: black;
  text-decoration: underline;
  white-space: nowrap;
}
</style>

