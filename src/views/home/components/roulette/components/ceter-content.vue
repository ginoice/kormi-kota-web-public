<template>
  <div class="center">
    <img class="center__circle-big" src="@/assets/images/home/roulette/circle-big.svg" alt="">
    <img class="center__cat" src="@/assets/images/home/roulette/cat.svg" alt="">
    <img class="center__circle" src="@/assets/images/home/roulette/circle.svg" alt="">
  
    <div class="container">
      <h5 class="center__title">
        уже помогаем
      </h5>

      <h5 class="center__title-mob">
        уже помо <br> гаем
      </h5>

      <p class="center__text">
        У Много Лосося есть целая категория еды для&nbsp;пушистых — Для котика. В ней мы приготовили нежные кусочки тунца и креветок для вашего друга. А если хочется добавить веселья, то&nbsp;ставьте галочку на пункте "добавить кошачью мяту", ваш котик точно будет доволен. Посмотреть блюда можно <a class="center__text link" target="_blank" href="https://ml.onelink.me/DVTa/nft">здесь</a>.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CenterContentComponent'
}

</script>

<style lang="scss" scoped>

.container {
  @media screen and (max-width: 465px) {
    position: relative;
    top: -89px;
  }
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;


  &__circle-big {
    max-width: 543px;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 1370px) {
      max-width: 400px;
      top: auto;
      transform: translateX(-50%);
      bottom: 0;
    }

    @media screen and (max-width: 420px) {
      max-width: 400px;
      top: auto;
      transform: translate(-90%, -16%);
      bottom: 0;
    }
  }

  &__cat {
    position: relative;
    z-index: 10;

    max-width: 696px;
    width: 100%;

    min-width: 580px;
    transform: scale(1.2);

    @media screen and (max-width: 480px) {
      transform: scale(1.2) translate(13%, -25%);
    }
  }

  &__circle {
    max-width: 922px;
    width: 100%;

    transform: translateY(-50%);

    position: absolute;
    top: 0;
    right: 0;

    @media screen and (max-width: 1370px) {
      top: -30%;
      right: -27%;
    }

    @media screen and (max-width: 980px) {
      top: -30%;
      right: -27%;
    }

    @media screen and (max-width: 530px) {
      top: -50%;
      right: -27%;

      transform: translateY(-30%) rotate(-20deg);
    }

    // @media screen and (max-width: 400px) {
    //   top: -70%;
    // }
  }

  &__title {
    position: relative;
    z-index: 10;

    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 200px;
    line-height: 88.5%;
    letter-spacing: 0.01em;
    color: #000000;
    transform: rotate(-13deg) translate(0%);
    max-width: 200px;

    @media screen and (max-width: 1370px) {
      font-size: 150px;
      transform: rotate(-13deg) translate(0%);
      margin-bottom: 20px;
    }

    @media screen and (max-width: 753px)  {
      display: none;
    }
  }

  &__text {
    position: relative;
    z-index: 10;
    max-width: 800px;
    font-weight: 500;
    font-size: 28px;
    line-height: 152%;
    color: #000000;

    transform: translate(30%, 6%);

    @media screen and (max-width: 1370px) {
      transform: translate(10%, 25%);
    }

    @media screen and (max-width: 733px) {
      max-width: 100%;
      transform: translate(0, 35%);
    }

    @media screen and (max-width: 420px) {
      max-width: 100%;
      transform: translate(0, 0);
      font-size: 16px;
    }
  }
}
.center__title-mob {
  display: none;
  position: relative;
  z-index: 10;

  font-family: 'RussoOne', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 200px;
  line-height: 88.5%;
  letter-spacing: 0.01em;
  color: #000000;
  transform: rotate(-13deg) translate(25%);

  @media screen and (max-width: 1370px) {
    font-size: 150px;
    max-width: 200px;
    transform: rotate(-13deg) translate(-100%);
    margin-bottom: 20px;
  }

  @media screen and (max-width: 753px)  {
    display: block;
  }

  @media screen and (max-width: 820px)  {
    transform: rotate(-13deg) translate(0);
    max-width: 100%;
  }

  @media screen and (max-width: 733px) {
    font-size: 100px;
    max-width: 400px;
  }

  @media screen and (max-width: 577px) {
    transform: rotate(-13deg) translate(0, 25%);
  }

  @media screen and (max-width: 420px) {
    transform: rotate(-13deg) translate(15px, -13%);
  }
}

.link {
  text-decoration: underline;
}
</style>
