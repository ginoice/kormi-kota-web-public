<template>
  <footer class="footer">
    <div class="container">

      <div class="footer__body body">

        <div class="body__text-wrap">
          <a class="body__text" href="https://mnogolososya.ru/" target="_blank">
            подробнее о Много Лосося
          </a>
          <a class="body__text" href="https://about.mnogolososya.ru/kormikota-rules" target="_blank">
            правила&nbsp;акции
          </a>
        </div>

        <p class="body__text">
          © ООО «Много Лосося», 2022
        </p>

        <div class="body__links links">
          <a class="links__link" href="https://t.me/mnogo_lososya">телеграм</a>
          <a class="links__link" href="https://vk.com/mnogolososyaa">вк</a>
          <a class="links__link" href="https://www.tiktok.com/@mnogolososya">тик-ток</a>
        </div>

      </div>
      
      <p class="text">
        Акция не является лотереей, участие в ней не связано с внесением платы участниками и не основано на риске и случайном выигрыше. Участие в акции не является обязательным.
      </p>
    </div>
  </footer>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'FooterComponent',

  setup () {
    const state = reactive({
    })

    return { ...toRefs(state) }
  }
}

</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 3;
}
.body {
  padding-bottom: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &__text {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: #000;

    & + & {
      margin-left: 20px;

      @media screen and (max-width: 966px) {
        margin-left: 0px;
      }
    }

    &-wrap {
      @media screen and (max-width: 966px) {
        display: flex;
        flex-direction: column;
      }

      @media screen and (max-width: 966px)  {
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 1133px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;

    .body__text-wrap {
      grid-column: 1/3;
    }

    &__text:nth-child(2) {
      grid-column: 3/5;
      justify-self: end;
    }
  }

  @media screen and (max-width: 673px) {
    grid-template-columns: repeat(1, 1fr);

    &__text:nth-child(1) {
      grid-column: 1;
      justify-self: center;
    }

    &__text:nth-child(2) {
      grid-column: 1;
      justify-self: center;
      text-align: center;
    }
  }
}

.links {
  display: flex;
  align-items: center;

  @media screen and (max-width: 1133px) {
    grid-column: 2/4;
    justify-self: center;
  }

  @media screen and (max-width: 673px) {
    grid-column: 1;
    justify-self: center;
  }

  &__link {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: #000;

    & + & {
      margin-left: 40px;
    }
  }
}

.text {
  font-size: 14px;
  color: #000;
  margin-bottom: 20px;
}
</style>
