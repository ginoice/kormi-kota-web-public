<template>
  <div v-if="activeModal" @click="hiddenModal($event.target)" class="modal">
    <div class="conatiner">
      <div class="modal__body">
        <div v-if="!success" ref="content" class="modal__content content">

          <button class="hidden-modal">&#10008;</button>

          <h5 class="content__title">
            ваш номер телефона
          </h5>

          <p class="content__desc">
            На указанный номер телефона придет смс с промокодами, которые можно использовать при заказе в мобильном приложении Много Лосося
          </p>

          <span class="content__label">
            <template
              v-for="(item, index) in attribut"
              :key="index">
              <p class="label"> {{item.presentName}} </p>
            </template>
          </span>
          
          <p class="err">
            {{descValidateInput.description}}
          </p>
          <form class="form">
            <input @input="validateForm()" class="form__input" placeholder="+7 000 000 00 00" type="text" name="phone" minlength="12" maxlength="12" v-model="phone">
            <button
              :disabled="validFormVuex.disabled"
              @click.prevent="pushForm()"
              class="form__btn"
              type="submit"
            >
              Получить&nbsp;подарки
            </button>
          </form>

        </div>

        <div v-if="success" ref="content" class="modal__content content ">

          <h5 class="content__title">
            супер!
          </h5>

          <p class="content__desc">
            Спасибо за помощь пушистым! Вы супер :)
          </p>

          <img class="cat-modal" src="@/assets/images/user-cats/cat-modal.png" alt="">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
  name: 'ModalComponent',

  props: {
    activeModal: {
      type: Boolean,
      default: true
    },
    dataToken: {},
    attribut: {}
  },

  setup (props, {emit}) {
    const content = ref()
    const store = useStore()
    const phone = ref('+7')

    const validFormVuex = computed(() => store.getters.getValid)
    const success = computed(() => store.getters.getSuccess)

    let disabledBtn = ref(false)

    const hiddenModal = (e) => {
      if (!e.closest('.modal__content')) {
        emit('hiddenModal')
        store.commit('setSatus', {
          disabled: true,
          description: ''
        })
        store.commit('setSuccess', false)
      }

      if (e.closest('.hidden-modal')) {
        emit('hiddenModal')
        store.commit('setSatus', {
          disabled: true,
          description: ''
        })
        store.commit('setSuccess', false)
      }
    }

    const validateForm = () => {
      if (phone.value.length > 0) {
        store.commit('setSatus', {
          disabled: false,
          description: ''
        })
      } else {
        store.commit('setSatus', {
          disabled: true,
          description: ''
        })
      }
    }

    const pushForm = () => {
      if (phone.value.length > 0) {
        store.dispatch('pushPhone', {
          category_id: props.dataToken.tokenLevel,
          nft_id: props.dataToken.tokenTokenIdInLevel,
          phone: phone.value,
          idToken: props.dataToken.idToken
        })
      }
    }

    return {
      hiddenModal,
      content,
      phone,
      pushForm,
      store,
      disabledBtn,
      validateForm,
      validFormVuex,
      descValidateInput: computed(() => store.getters.getValid),
      success
    }
  }
}

</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  z-index: 10000;
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
    margin: 13px 0;
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

  @media screen and (max-width: 568px) {
    flex-direction: column;
  }

  &__input {
    padding: 17px 10px;
    border: 3px solid #000000;
    border-radius: 12px;
    width: 100%;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    color: #000000;

    &:placeholder {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 39px;
      color: grey;
    }
  }

  &__btn {
    padding: 17px;
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


    &:disabled {
      opacity: 0.5;
    }

    @media screen and (max-width: 568px) {
      margin-left: 0;
      margin-top: 20px;
    }
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
  color: red;
  transform: translateY(50%);
}

.hidden-modal {
  font-size: 55px;

  position: absolute;
  top: 0;
  right: 0;

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
