<template>
  <section class="cards">

    <img class="cards__img" src="@/assets/images/home/cards/middle-circle.svg" alt="">

    <div class="container">
      <div class="cards__body body">
        <div class="text-wrapper">
          <p class="body__text desktop">
            Пожертвуйте 100₽, 500₽ или 1000₽ в&nbsp;фонд поддержки животных и получите NFT-токен с возможностью обмена <span class="border"> <img class="border-item" src="@/assets/images/home/cards/icon-7.svg" alt=""> на&nbsp;подарки&nbsp;от&nbsp;Много&nbsp;Лосося</span>
          </p>
          <p class="body__text mob">
            Пожертвуйте 100₽, 500₽ или 1000₽ в&nbsp;фонд поддержки животных и получите NFT-токен с возможностью обмена <span class="border"> <img class="border-item" src="@/assets/images/home/cards/icon-7.svg" alt=""> на&nbsp;подарки от&nbsp;Много&nbsp;Лосося</span>
          </p>
          <img class="body__text-circle" src="@/assets/images/home/cards/circle.svg" alt="">
        </div>

        <cards-wrapper-component/>


        <div class="sub-text__wrapper">
          <p class="sub-text">
            <img class="sub-text__img" src="@/assets/images/home/cards/arrow.svg" alt="">
            <img class="cards-wrapper__img-circle" src="@/assets/images/home/cards/circle.svg" alt="">
            Мы выпустили 2300 цифровых котиков на&nbsp;блокчейне Binance Smart Chain. Средства с&nbsp;продажи токенов будут отправлены
            в&nbsp;<a target="_blank" class="fond-link" href="https://foodbankrus.ru/">Фонд&nbsp;продовольствия&nbsp;«Русь» <img class="fond-link__border" src="@/assets/images/home/cards/fond.svg" alt=""></a>
            на&nbsp;помощь приютам для бездомных животных, а владельцы NFT смогут конвертировать их в&nbsp;реальные подарки от Много Лосося
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import CardsWrapperComponent from './components/cards-wrapper.vue'

export default {
  name: 'CardsComponent',
  components: { CardsWrapperComponent }
}

</script>

<style lang="scss" scoped>
.cards {
  position: relative;

  @media screen and (max-width: 375px) {
    margin-top: 120px;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;

    max-width: 400px;
    width: 100%;

    transform: translate(0, 25%);

    @media screen and (max-width: 1366px) {
      max-width: 400px;
      transform: translate(0, 8%);
    }

    @media screen and (max-width: 1050px) {
      max-width: 400px;
      transform: translate(0, 40%);
    }

    @media screen and (max-width: 930px) {
      transform: translate(-24%, -56%);
    }

    @media screen and (max-width: 385px) {
      transform: translate(-89%, -57%) rotate(8deg);
    }

    @media screen and (max-width: 375px) {
      transform: translate(-90%, -63%) rotate(8deg);
    }
  }
}

.body {
  padding: 120px 0;

  @media screen and (max-width: 930px) {
    padding: 0 0 120px 0;
  }
  @media screen and (max-width: 530px) {
    padding: 120px 0 120px 0;
  }

  &__text {
    font-weight: 500;
    font-size: 28px;
    line-height: 152%;
    color: #000000;
    transform: rotate(-6.12deg);

    max-width: 589px;

    position: relative;
    z-index: 10;

    &-circle {
      display: none;

      @media screen and (max-width: 375px) {
        display: block;

        position: absolute;
        top: -20px;
        left: 0;

        width: 200px;
        transform: rotate(-20deg);
      }
    }

    @media screen and (max-width: 375px) {
     font-size: 20px;
     line-height: 156%;
    }

  }
}

.text-wrapper {
  display: flex;
  justify-content: center;
}

.sub-text__wrapper {
  display: flex;
  justify-content: center;
}
.fond-link {
  font-weight: 500;
  font-size: 28px;
  line-height: 152%;
  color: #000000;

  position: relative;

  @media screen and (max-width: 750px) {
    font-size: 20px;
    max-width: 506px;
  }

  &__border {
    position: absolute;
    top: 0;
    left: 0;
    width: 430px;
    transform: rotate(-6deg) translateX(-8px) translateY(-25%);

    @media screen and (max-width: 750px) {
      transform: rotate(-6deg) translateX(-5px) translateY(-25%);
      width: 320px;
    }
  }
}
.sub-text {
  position: relative;
  z-index: 10;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 152%;
  color: #000000;
  transform: rotate(6.71deg) translate(7px, 0);
  max-width: 716px;

  @media screen and (max-width: 750px) {
    font-size: 20px;
    max-width: 516px;
  }

  @media screen and (max-width: 533px) {
    font-size: 20px;
    max-width: 443px;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;

    transform: translate(-85%, -85%);

    @media screen and (max-width: 750px) {
      width: 200px;
      left: auto;
      right: 0;
      transform: translate(0, -140%);
    }
  }
}

.cards-wrapper__img-circle {
  position: absolute;
  z-index: -1;
  display: none;
  @media screen and (max-width: 750px) {
    top: 0;
    left: 0;

    transform: rotate(100deg) translate(-60%, 54%);

    width: 200px;
    display: block;
  }
}

.border {
  position: relative;

  &-item {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
  }
}

.desktop {
  @media screen and (max-width: 482px) {
    display: none;
  }
}

.mob {
  display: none;
  @media screen and (max-width: 482px) {
    display: block;
  }
}
</style>
