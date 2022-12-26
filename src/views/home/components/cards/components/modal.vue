<template>
  <div v-if="activeModal" @click="hiddenModal($event.target)" class="modal">
    <div class="conatiner">
      <div class="modal__body">
        <div v-if="!success" ref="content" class="modal__content content">

          <button @click="$emit('hModal')" class="hidden-modal"><img src="@/assets/images/home/closes.png" alt=""></button>

          <h5 class="content__title">
            купить котика
          </h5>

          <p class="content__desc">
            NFT-котик будет начислен на указанный кошелек в течение <br> 2-х часов. После этого вы найдете его в разделе <b>Мои котики</b> на&nbsp;этом сайте.
          </p>

          <p class="content__text">
            Введите ваш адрес кошелька <b> Binance Smart Chain.</b>
            <br>
            <a class="content__text-link" target="_blank" href="https://static.mlkitchen.ai/nft/BSC_wallet_instruction.pdf">Что такое кошелек Binance Smart Chain и где найти его адрес?</a>
          </p>

          <form  name="TinkoffPayForm" onsubmit="pay(this); return false;">
            <input class="tinkoffPayRow" type="hidden" name="terminalkey" value="1646392693993">
            <input class="tinkoffPayRow" type="hidden" name="frame" value="true">
            <input class="tinkoffPayRow" type="hidden" name="language" value="ru"> 
            <input class="tinkoffPayRow" type="hidden"  placeholder="Сумма заказа" name="amount" :value="price">

              <input @input="foo()" v-model="address" class="tinkoffPayRow form__input" type="text"  placeholder="Адрес кошелька Binance Smart Chain"  name="description">
              <div class="form-wrap">
                              <p class="form__warning">
                Будьте внимательны! Если вы укажите неверный адрес или адрес кошелька другой сети, ваш NFT-котик пропадет
              </p>
              <input :disabled="disabledBtn" class="tinkoffPayRow form__btn" type="submit" :value="`Купить за ${price} руб`">
              </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ethers } from 'ethers'
import { ref } from '@vue/reactivity'
export default {
  name: 'ModalComponent',

  props: {
    activeModal: {
      type: Boolean,
      default: true
    },
    price: {
      type: String,
      default: ''
    }
  },

  setup (props, {emit}) {
    let address = ref('')
    let disabledBtn = ref(true)
    
    let foo =  () => {
      try {
        ethers.utils.getAddress(address.value)
        disabledBtn.value = false
      } catch {
        disabledBtn.value = true
      }
    }

    const hiddenModal = (e) => {
      if (!e.closest('.modal__content')) {
        emit('hiddenModal')
      }
    }

    const validateForm = () => {

    }

    const pushForm = () => {

    }

    return {
      pushForm,
      validateForm,
      hiddenModal,
      disabledBtn,
      address,
      foo
    }
  }
}
</script>


<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  color: #fff;
  overflow-y: auto;

  &__body {
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.content {
  max-width: 740px;
  width: 100%;
  min-height: 490px;
  background: #FFFFFF;
  border-radius: 16px;

  padding: 40px 40px 55px 40px;

  position: relative;

  &__title {
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 100%;
    text-transform: uppercase;

    color: #000000;

    @media screen and (max-width: 568px) {
      font-size: 60px;
    }
  }

  &__desc {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;

    color: #000000;
    margin: 24px 0 32px 0;
  }

  &__text {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;

    color: #000000;

    margin-bottom: 32px;

    &-link {
      font-family: 'Inter', sans-serif;
      font-style: italic;
      font-weight: 500;
      font-size: 14px;
      line-height: 120%;
      color: #000000;

      text-decoration-line: underline;

      margin-top: 13px;
    }
  }

  &__label {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
  }
}

.form {
  margin-top: 28px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 568px) {
    flex-direction: column;
  }

  &-wrap {
    display: flex;
    align-items: center;

    margin-top: 24px;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  &__input {
    padding: 17px 10px;
    border: 3px solid #000000;
    border-radius: 12px;
    width: 100%;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    margin: 0 !important;

    color: rgba(0, 0, 0, 0.5);

    &:placeholder {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;

      color: black;
    }
  }

  &__btn {
    padding: 17px;
    width: 248px;
    font-family: 'RussoOne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #fff;
    text-align: center;
    background: black;
    border-radius: 12px;
    margin-left: 20px;

    white-space: nowrap;

    &:disabled {
      opacity: 0.5;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
            margin-left: 0;
      margin-top: 20px;
    }
  }

  &__warning {
    font-family: 'Inter', sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #FF0000;
  }
}

.cat-modal {
  position: absolute;
  bottom: 0;
  right: 0;
}

.err {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 39px;
  color: #ff0000;
  transform: translateY(50%);
}

.hidden-modal {
  font-size: 55px;

  position: absolute;
  top: 10px;
  right: 10px;

  transform: translate(-17%, 10%);
}

.label {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: black;
}
</style>
