<template>
  <div class="counter">
    <div class="wrapper">
      <div class="counter__body body">

        <img class="body__cat-left cat-left" src="@/assets/images/home/goals/cat-left.png" alt="">
        <img class="body__cat-right cat-right" src="@/assets/images/home/goals/cat-right.png" alt="">

        <div class="body__content">
          <h5 class="body__title">
            обрадовано котиков: {{ Math.floor(Number(balanceContract) / 0.1) }}
          </h5>

          <p class="body__text">
            Каждые 0,2 BNB (≈3000₽) – это месяц сытой и радостной жизни для одного котика, благодаря вашей помощи Фонду
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'CounterComponent',
  setup () {
    const store = useStore()

    onMounted(() => {
      store.dispatch('balanceContract')
    })

    return { 
      balanceContract: computed(() => store.getters.getBalanceContract)
    }
  }
}

</script>

<style lang="scss" scoped>
.counter {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  margin-top: 170px;

  @media screen and (max-width: 760px) {
    margin-top: 150px;
  }

  @media screen and (max-width: 485px) {
    margin-top: 100px;
  }

  @media screen and (max-width: 520px) {
    transform: translateY(30%);
  }
}

.wrapper {
  transform: rotate(3.47deg);
  max-width: 1005px;
  min-width: 490px;
  width: 100%;

  @media screen and (max-width: 501px) {
    transform: rotate(9.77deg);
  }
}

.body {
  position: relative;
  // z-index: 10;
  // transform: rotate(3.47deg);
  max-width: 1005px;
  min-width: 490px;
  width: 100%;

  padding: 57px 82px;
  border: 6px solid #000000;
  border-radius: 61px;

  &::after {
    content: "";

    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 61px;
  }

  background: url('~@/assets/images/home/goals/blur.svg') no-repeat center top / cover, rgba( 255, 255, 255, 0.29 );

  @media screen and (max-width: 485px) {
    padding: 57px 0 57px 50;
  }

  &__content {
    transform: rotate(-3.47deg) translateY(-25px);

    @media screen and (max-width: 501px) {
      transform: rotate(-9.77deg) translateY(-25px);
    }
  }

  &__title {
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 120%;
    color: #000000;

    margin-bottom: 30px;

    @media screen and (max-width: 1060px) {
      font-size: 50px;
    }
  }

  &__text {
    font-weight: 500;
    font-size: 28px;
    line-height: 152%;

    color: #000000;

    @media screen and (max-width: 760px) {
      font-size: 20px;
    }
    @media screen and (max-width: 435px) {
      max-width: 330px;
    }
  }

  @media screen and (max-width: 1060px) {
    max-width: 700px;
  }
}

.cat-left {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  max-width: 254px;
  width: 100%;

  transform: translateY(-69%) translateX(50%);

  @media screen and (max-width: 1060px) {
    transform: translateY(-70%) translateX(1%);
    max-width: 200px;
  }
}

.cat-right {
  position: absolute;
  top: 0;
  right: 0;

  transform: translateX(25%);
  
  max-width: 232px;
  width: 100%;

  @media screen and (max-width: 1060px) {
    top: auto;
    bottom: 0;
    transform: translateX(25%) translateY(30%);
  }

  @media screen and (max-width: 485px) {
    transform: translateX(25%) translateY(45%);
  }
}
</style>