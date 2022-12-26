<template>
  <div class="accordion__item accordion-wrapper" :class="{[type]: true}">
    <div class="wrapper">
      <img v-if="!isOpen" class="mark" src="@/assets/images/home/info/question-mark.svg" alt="">
       <img v-else class="mark" src="@/assets/images/home/info/exclamation-mark.svg" alt="#">
      <div class="wrapper-inner">
        <div class="header" @click="toggleClicked">
          <!-- <img src="@/assets/images/home/info/exclamation-mark.svg" alt="#"> -->
          <div class="title" :class="{up: isOpen}">
            {{ title }}
          </div>
        </div>

        <transition
          name="accordion"
          @enter="start"
          @after-enter="end"
          @before-enter="beforeEnter"
          @before-leave="start"
          @after-leave="end"
        >
          <div v-show="isOpen" class="accordion__content">
            <div class="accordion__content__inner">
              <slot />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionComponent',
  props: {
    /**
     * Открыть или скрыть аккордион
     */
    value: {
      type: Boolean,
      default: false
    },
    /**
     * Заголовок
     */
    title: {
      type: String,
      required: true
    },
    /**
     * аккордион внутренний(inner) или внешний(main - с рамками)
     * @values main, inner
     */
    type: {
      type: String,
      default: 'main',
      validator (value) {
        return ['main', 'inner'].includes(value)
      }
    }
  },
  data () {
    return {
      isOpen: this.value
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.height = '0'
    },
    start (el) {
      el.style.height = `${el.scrollHeight}px`
    },
    end (el) {
      el.style.height = ''
    },
    toggleClicked () {
      this.isOpen = !this.isOpen
      this.$emit('input', this.isOpen)
    }
  },
  watch: {
    value (value) {
      this.isOpen = value
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: flex-start;
  }

  .mark {
    transform: translateY(-10%);
  }

  .wrapper-inner {
    margin-left: 50px;
  }

  .accordion__item.main {
    padding: 14px 0;
  }

  .accordion__item.inner + .accordion__item.inner {
    margin-top: 14px;
  }

  .accordion__item.main + .accordion__item.main {
    border-top: 0;
  }

  .header {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: flex-end;
  }

  .title {
    font-weight: 700;
    font-size: 28px;
    line-height: 152%;
    flex: 1;
    transition: all .4s;

    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }

  .accordion__content__inner {
    padding-top: 14px;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #000;
    @media screen and (max-width: 425px) {
      font-size: 17px;
    }
  }

  .accordion-enter-active,
  .accordion-leave-active {
    will-change: height;
    transition: height 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
    overflow: hidden;
  }

  .accordion-enter,
  .accordion-leave-to {
    height: 0 !important;
  }
</style>
