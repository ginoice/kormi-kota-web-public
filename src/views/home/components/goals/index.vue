<template>
  <section class="goals">

    <img class="goals__circle-big" src="@/assets/images/home/goals/circle-big.svg" alt="circle-big">
    <img class="goals__circle" src="@/assets/images/home/goals/circle.svg" alt="circle">

    <div class="container">

      <div class="goals__body body">
        <h5 class="body__title">цель</h5>
        <p class="body__text">Помочь животным. Мы не будем ждать выпуска последнего токена. Деньги будут направляться в Фонд ежемесячно. На них команда сможет продолжать заботиться о бездомных животных, поддерживая приюты по всей России, передавая им корм и нашу любовь </p>
        <p @click="$emit('onScrollToFAQ')" class="body__sub-text">Как я узнаю, что полученные с моего NFT деньги действительно будут отправлены в Фонд продовольствия «Русь»?</p>

        <img class="body__cats" src="@/assets/images/home/goals/cats.png" alt="cats">

        <counter-component />

      </div>

    </div>
  </section>
</template>

<script>
import CounterComponent from './components/counter.vue'

export default {
  name: 'GoalsComponent',
  components: { CounterComponent }
}

</script>

<style lang="scss" scoped>
.goals {
  position: relative;

  &__circle-big {
    position: absolute;

    top: 0;
    right: 0;
    max-width: 550px;
    width: 100%;


    @media screen and (max-width: 880px) {
      top: 20%;
      max-width: 300px;
    }

    @media screen and (max-width: 700px) {
      top: 25%;
      right: -10%;
      max-width: 300px;
    }
    @media screen and (max-width: 500px) {
      top: 25%;
      right: -20%;
      max-width: 300px;
    }
    @media screen and (max-width: 400px) {
      top: 25%;
      right: -40%;
      max-width: 300px;
    }
  }

  &__circle {
    position: absolute;
    top: 0;
    left: 0;

    transform: translateY(152%);

    max-width: 550px;
    width: 100%;

    @media screen and (max-width: 880px) {
      display: none;
    }
  }
}

.body {
  position: relative;
  z-index: 10;
  padding: 20px 0 123px 0;

  @media screen and (max-width: 540px) {
    padding: 20px 0 0px 0;
  }

  &__title {
    font-family: 'RussoOne', sans-serif;
    font-weight: 400;
    font-size: 200px;
    line-height: 88.5%;
    letter-spacing: 0.01em;
    color: #000000;

    transform: rotate(-3.81deg);
    margin-bottom: 74px;

    @media screen and (max-width: 880px) {
      font-size: 150px;
    }

    @media screen and (max-width: 400px) {
      font-size: 90px;
    }

  }

  &__text {
    margin-left: 100px;
    max-width: 681px;
    font-weight: 500;
    font-size: 28px;
    line-height: 152%;
    margin-bottom: 32px;
    color: #000000;
    @media screen and (max-width: 880px) {
      margin-left: 0px;
    }
    @media screen and (max-width: 700px) {
      font-size: 20px;
      max-width: 400px;
    }
  }

  &__sub-text {
    cursor: pointer;

    font-weight: 500;
    font-size: 20px;
    line-height: 148%;
    max-width: 664px;

    text-decoration-line: underline;

    color: #000000;
    margin-left: 100px;

    @media screen and (max-width: 880px) {
      margin-left: 0px;
    }
    @media screen and (max-width: 700px) {
      max-width: 400px;
      font-size: 15px;
    }
  }

  &__cats {
    max-width: 1100px;
    width: 100%;

    @media screen and (max-width: 540px) {
      transform: translateY(33%) scale(1.5);
    }

  }


}
</style>
