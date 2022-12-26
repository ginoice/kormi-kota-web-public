<template>
  <div class="wrapper">
  <img class="circle-big" src="@/assets/images/home/table/circle-big.svg" alt="">
  <div class="container">
    <div class="table-wrapper">

      <ul class="nav">
        <li
          @click="toggleFunc($event.target.getAttribute('id'))"
          id="ordinary"
          class="nav__item">
          обычный котик
          <img class="img img-4" src="@/assets/images/home/table/icon-4.svg" alt="">
          <img v-show="ordinary" class="img-active img-active-mob" src="@/assets/images/home/table/icon-4.svg" alt="">
        </li>
        <li
          @click="toggleFunc($event.target.getAttribute('id'))"
          id="rare"
          class="nav__item">
          редкий котик
          <img class="img img-5" src="@/assets/images/home/table/icon-5.svg" alt="">
          <img v-show="rare" class="img-active" src="@/assets/images/home/table/icon-5.svg" alt="">
        </li>
        <li
          @click="toggleFunc($event.target.getAttribute('id'))"
          id="elite"
          class="nav__item">
          чумачечий котик
          <img class="img img-6" src="@/assets/images/home/table/icon-6.svg" alt="">
          <img v-show="elite" class="img-active" src="@/assets/images/home/table/icon-6.svg" alt="">
        </li>
      </ul>

      <table-inner-component>
        <ordinary-cats-component v-if="ordinary" />
        <rare-cats-component v-if="rare" />
        <elite-cats-component v-if="elite" />
      </table-inner-component>

      <img class="cat-img" src="@/assets/images/home/table/cat.svg" alt="">

    </div>
  </div>
  </div>
</template>

<script>
import TableInnerComponent from './table.vue'
import RareCatsComponent from './rare-cats.vue'
import OrdinaryCatsComponent from './ordinary-cats.vue'
import EliteCatsComponent from './elite-cats.vue'

import { inject } from '@vue/runtime-core'

export default {
  name: 'TableWrapperComponent',
  components: {
    TableInnerComponent,
    RareCatsComponent,
    OrdinaryCatsComponent,
    EliteCatsComponent
  },

  setup () {
    let ordinary = inject('ordinary')
    let rare = inject('rare')
    let elite = inject('elite')

    const toggleFunc = (value) => {

      if (value === 'ordinary') {
        ordinary.value = true
        rare.value = false
        elite.value = false
      }

      if (value === 'rare') {
        ordinary.value = false
        rare.value = true
        elite.value = false
      }

      if (value === 'elite') {
        ordinary.value = false
        rare.value = false
        elite.value = true
      }
    }

    return {
      ordinary,
      rare,
      elite,
      toggleFunc
    }
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
.table-wrapper {
  padding: 98px 53px;
  background: rgba( 255, 255, 255, 0.25 );
  // box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 3px );
  -webkit-backdrop-filter: blur( 3px );
  border: 6px solid #000000;
  border-radius: 32px;

  margin-top: 100px;

  position: relative;
  z-index: 10;

  @media screen and (max-width: 509px) {
    padding: 25px 13px 98px 13px;
  }
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none !important;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }

  &__item {
    font-size: 28px;
    cursor: pointer;
    color: #000;
    padding: 5px 10px;
    transition: all .5s;

    position: relative;
    z-index: 11;
    font-weight: 900;
    text-align: center;

    @media screen and (max-width: 375px) {
      font-size: 24px;
    }

    .img {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-8%, -17%);
      opacity: 0;
      transition: all .3s;
      z-index: -2;
    }

    &:nth-child(1) {
      @media (any-hover: hover) {
        &:hover {
          .img-4 {
            opacity: 1;
          }
        }
      }
    }

    &:nth-child(2) {
      @media (any-hover: hover) {
        &:hover {
          .img-5 {
            opacity: 1;
          }
        }
      }
    }

    &:nth-child(3) {
      @media (any-hover: hover) {
        &:hover {
          .img-6 {
            opacity: 1;
          }
        }
      }
    }

    &:active {
      &:after {
        opacity: 1;
      }
    }


    & + & {
      margin-left: 37px;

      @media screen and (max-width: 720px) {
        margin-left: 0px;
        margin-top: 35px;
      }

      @media screen and (max-width: 630px) {
        margin-top: 20px;
      }
    }
  }
}

.cat-img {
  position: absolute;
  z-index: -1;

  max-width: 337px;

  bottom: 0;
  right: 0;

  transform: translate(50%, 62%)
}

.circle-big {
  position: absolute;
  z-index: -1;

  top: 0;
  right: 0;

  @media screen and (max-width: 630px) {
    right: -100%;
  }
}

.img-active {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-8%, -17%);
  transition: all .3s;
  z-index: -2;
}

.img-active-mob {
  @media screen and (max-width: 420px) {
    transform: translate(-7%, -20%);
  }
}
</style>
