<template>
  <srction class="info">
    <div class="container">

      <div class="info__body body">
        <h4 class="body__title desk">
          Что у вас здесь происходит?
        </h4>

        <h4 class="body__title mob">
          Что у вас здесь происхо <br> дит?
        </h4>

        <div class="body__accordions accordions">
          <accordion-component
              v-for="(item, index) in info"
              :key="index"
              :title="item.title"
          >
            <span v-html="item.text"></span>
          </accordion-component>
        </div>
      </div>

    </div>
  </srction>
</template>

<script>
import AccordionComponent from '@/components/accordion.vue'

export default {
  name: 'InfoComponent',
  components: {AccordionComponent},

  setup() {
    const info = [
      {
        title: 'Почему NFT?',
        text: 'Мы хотим дать возможность не просто помочь животным, но и получить за это классную уникальную карточку. А благодаря вкусным подаркам привлечь к участию больше людей.'
      },
      {
        title: 'Как купить NFT котика?',
        text: `
          Как купить NFT котика на этом сайте, мы подробно описали в <a target="_blank" href="https://static.mlkitchen.ai/nft/Buy_NFT_Instruction.pdf" style="color: black;  text-decoration: underline;">инструкции</a>
        `
      },
      {
        title: 'Почему Binance Smart Chain?',
        text: `
        1. Комиссия за транзакцию существенно ниже, чем в Ethereum. Мы не хотим, чтобы Вы платили сотни рублей комиссии при получении подарка.
        <br>
        <br>
        2. Binance Smart Chain использует алгоритм Proof-of-Stake, который в отличии от Proof-of-Work в Ethereum требует меньше вычислительных ресурсов и, как следствие, наносит меньше вреда окружающей среде.
        `
      },
      // {
      //   title: 'Где мне взять BNB токен для покупки NFT?',
      //   text: 'Вы можете приобрести BNB на бирже Binance. В <a target="_blank" href="https://static.mlkitchen.ai/nft/Buy_BNB_Instruction.pdf" style="color: black;  text-decoration: underline;">инструкции</a> мы подробно описали, как это сделать.'
      // },
      {
        title: 'Как я узнаю, что полученные с моего NFT деньги действительно будут отправлены в Фонд продовольствия «Русь»?',
        text: `
          Собранные с продажи NFT деньги мы отправляем в фонд ежемесячно. Платежные поручения о переводе средств мы будем публиковать ежемесячно <a target="_blank" href="https://static.mlkitchen.ai/nft/finance_report.pdf" style="color: black;  text-decoration: underline;">тут</a>.
          <br />А <a target="_blank" href="https://foodbankrus.ru/o-nas/rezultaty-raboty/" style="color: black;  text-decoration: underline;">тут</a> можете посмотреть, на что фонд потратил эти деньги.
        `
      },
      // {
      //   title: 'Зачем мне покупать NFT котика?',
      //   text: `
      //     Помимо помощи реальным животным и возможности получить подарочные блюда и скидки от Много лосося, владелец NFT котика получает доступ к клубу привилегий Много лосося, а именно
      //     <ul style="list-style: disc !important; padding-left: 40px" class="list">
      //       <li>участие в розыгрышах подарков среди владельцев NFT котиков;</li>
      //       <li>доступ на закрытые дегустации нового меню в Москве;</li>
      //       <li>доступ на вечеринки в офисе Много лосося в Москве с напитками, едой, играми и танцами;</li>
      //       <li>эксклюзивный доступ к presale покупке будущих NFT коллекций.</li>
      //     </ul>
      //   `
      // }

    ]

    return {info}
  }
}

</script>

<style lang="scss" scoped>
.info {
  display: flex;
  align-items: center;

  background: #FDFFA4;
  min-height: 100vh;

  padding: 100px 0;
}

.body {
  &__title {
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 100%;
    margin-bottom: 120px;

    @media screen and (max-width: 760px) {
      font-size: 90px;
    }

    @media screen and (max-width: 425px) {
      font-size: 55px;
      margin-bottom: 80px;
    }
  }
}

.desk {
  @media screen and (max-width: 620px) {
    display: none;
  }
}

.mob {
  display: none;

  @media screen and (max-width: 620px) {
    display: block;
  }

  
}

</style>
