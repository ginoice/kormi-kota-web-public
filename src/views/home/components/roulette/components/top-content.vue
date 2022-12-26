<template>
  <div class="top">
    <div class="container">
      <div class="top__header">
        <img class="top__images" src="@/assets/images/home/roulette/sun.svg" alt="#">
        <img class="top__images-top" src="@/assets/images/home/roulette/arrow-mob.svg" alt="">
        <h5 class="top__title">котору<br>летка</h5>
      </div>

      <div class="top__bottom">
        <p class="top__text">
          Даже при покупке обычного токена вам может выпасть редкий котик, который дарит несколько подарков от Много Лосося
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopContentComponent'
}

</script>

<style lang="scss" scoped>
.top {
  position: relative;
  z-index: 10;

  &__header {
    display: flex;
    align-items: center;

    position: relative;

    @media screen and (max-width: 1160px) {
      flex-direction: column;
    }
  }

  &__images {
    max-width: 900px;
    width: 100%;

    transform: translateX(-25%);

    @media screen and (max-width: 1160px)  {
      position: absolute;

      top: 0;
      left: 0;

      transform: translate(-10%, -70%);
      
      max-width: 700px;
    }

    @media screen and (max-width: 760px) {
      transform: translate(-10%, -70%);
      max-width: 500px;
    }

    @media screen and (max-width: 560px) {
      transform: translate(-10%, -70%);
      max-width: 400px;
    }

    @media screen and (max-width: 559px) {
      display: none;
    }
  }

  &__title {
    font-family: 'RussoOne', sans-serif;
    font-weight: 400;
    font-size: 200px;
    line-height: 88.5%;

    letter-spacing: 0.01em;
    color: #000000;
    transform: rotate(8.74deg) translate(-72%, 20%);

    @media screen and (max-width: 1160px) {
      transform: rotate(-29.12deg);
      margin-bottom: 350px;
    }

    @media screen and (max-width: 760px) {
      font-size: 150px;
      margin-bottom: 400px;
    }

    @media screen and (max-width: 560px) {
      font-size: 100px;
      margin-bottom: 380px;
    }

    @media screen and (max-width: 440px) {
      margin-bottom: 430px;
    }

    @media screen and (max-width: 375px) {
      margin-bottom: 470px;
    }
  }

  &__bottom {
    display: flex;
    justify-content: center;

    transform: translateY(-100%);
  }

  &__text {
    font-weight: 500;
    font-size: 28px;
    line-height: 152%;
    color: #000000;
    max-width: 764px;

    @media screen and (max-width: 760px) {
      max-width: 664px;
    }

    @media screen and (max-width: 337px) {
      transform: translateY(30%);
    }
  }
}

.top__images-top {
  display: none;

  @media screen and (max-width: 559px) {
    position: absolute;
    display: block;

    top: 0;
    left: 0;
    transform: translate(-20%, -94%);
  }

  @media screen and (max-width: 420px) {
    max-width: 248px;
    transform: translate(-31%, -64%);
  }
}
</style>
