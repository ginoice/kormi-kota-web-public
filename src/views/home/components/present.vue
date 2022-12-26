<template>
  <section class="present">
    <div class="container">

      <img class="present__arrow" src="@/assets/images/home/present/arrow.svg" alt="">
      <img @click="$emit('onClick')" class="present__img" src="@/assets/images/home/present/label.svg" alt="">

      <div class="present__body body">

        <h4 class="body__title desk">
          Конвертируй NFT в&nbsp;реальные подарки от Много Лосося
        </h4>

        <h4 class="body__title mob">
          Конверти<br>руй NFT<br>в реальные<br>подарки<br>от Много Лосося<br>
        </h4>

        <div class="body__img-mob">
          <img class="body__img-mob__present__arrow" src="@/assets/images/home/present/arrow.svg" alt="">
          <img @click="$emit('onClick')" class="body__img-mob__present__img" src="@/assets/images/home/present/label.svg" alt="">
        </div>

        <p class="body__text">
          За каждый атрибут приобретенного NFT можно получить подарок. Чем реже встречается конкретное значение атрибута, тем более ценный подарок можно получить за него. Таким образом, Вы можете получить от 0 до 5 подарков за&nbsp;каждый NFT
        </p>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'PresentComponent'
}

</script>

<style lang="scss" scoped>
.present {
  display: flex;
  align-items: center;

  background: #C4FCFF;


  @media screen and (max-width: 1103px) {
    min-height: auto;
  }

  @media screen and (max-width: 520px) {
    padding-top: 120px;
  }
}

.container {
  position: relative;
}

.present__img {
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;

  animation: 3s linear 0s normal none infinite running spin;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  @media screen and (max-width: 998px) {
    display: none;
  }
}

.present__arrow {
  position: absolute;
  bottom: 35%;
  right: 0;
    @media screen and (max-width: 998px) {
    display: none;
  }
}

.body {
  padding: 135px 0 154px 0;
  @media screen and (max-width: 1103px) {
    padding: 100px 0 100px 0;
  }

  &__title {
    font-family: 'RussoOne', sans-serif;
    font-weight: 400;
    line-height: 120%;
    font-size: 100px;
    color: #000;

    max-width: 1098px;

    margin-bottom: 59px;

    @media screen and (max-width: 1103px) {
      font-size: 90px;
    }

    @media screen and (max-width: 760px) {
      font-size: 50px;
    }

    @media screen and (max-width: 375px) {
      font-size: 45px;
    }
  }

  &__text {
    font-weight: 500;
    font-size: 28px;
    line-height: 152%;
    color: #000;

    max-width: 706px;

    @media screen and (max-width: 1103px) {
      font-size: 20px;
      max-width: 506px;
    }

    @media screen and (max-width: 420px) {
      font-size: 20px;
    }
  }
}

.body__img-mob {
  display: none;

  @media screen and (max-width: 998px) {
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;

    position: relative;
  }

  &__present__arrow {
    position: absolute;
    top: 0;
    right: 0;

    transform: translate(0, -10%) rotate(50deg);

    @media screen and (max-width: 760px) {
      transform: translate(0, -23%) rotate(31deg);
    }

    @media screen and (max-width: 510px) {
      max-width: 150px;
      right: 15%;
    }

    @media screen and (max-width: 375px) {
      right: 0;
      transform: translate(0, -50%) rotate(31deg);
    }
  }

  &__present__img {
    cursor: pointer;

    animation: 3s linear 0s normal none infinite running spin;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
  }

    @media screen and (max-width: 510px) {
      max-width: 200px;
    }
  }
}


.desk {
  @media screen and (max-width: 480px) {
    display: none;
  }
}

.mob {
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
  }
}
</style>
