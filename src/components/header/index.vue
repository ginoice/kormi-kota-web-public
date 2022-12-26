<template>
  <header class="header">

    <transition name="fade-sidebar">
      <aside-component
        @onClick="activeBg = false"
        v-show="activeBg"
      />
    </transition>

    <img class="header__img" src="@/assets/images/home/banner/big-circle.png" alt="">
    <img class="header__img-mob" src="@/assets/images/home/banner/big-circle-mob.svg" alt="">

    <div class="container">
      <div class="header__body body">
        <img class="body__img" src="@/assets/images/home/banner/circle.svg" alt="">

        <img class="logo" @click="router.push({name: 'home'})" src="@/assets/images/header/header-logo.svg" alt="">

        <nav-component/>

        <button class="body__bg" type="button">
          <img @click="activeBg = true" src="@/assets/images/header/burger.svg" alt="">
        </button>
        
      </div>
    </div>
  </header>
</template>

<script>
import AsideComponent from './components/sidebar.vue'
import NavComponent from './components/nav.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  name: 'HeaderComponent',
  components: { NavComponent, AsideComponent },

  setup () {
    const router = useRouter()
    let activeBg = ref(false)

    return { activeBg, router }
  }
}

</script>

<style lang="scss" scoped>
.header {
  position: relative;

  &__img {
    position: absolute;
    top: 0;
    right: 0;

    max-width: 480px;
    width: 100%;

    @media screen and (max-width: 1090px) {
      transform: translate(31%, -50%);
    }
    @media screen and (max-width: 782px) {
      transform: translate(66%, -74%);
    }
    @media screen and (max-width: 480px) {
      transform: translate(80%, -79%);
    }
    @media screen and (max-width: 380px) {
      display: none;
    }
  }

  &__img-mob {
    position: absolute;
    top: 0;
    right: 0;

    display: none;

    @media screen and (max-width: 380px) {
      display: block;
    }
  }
}

.body {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 73px;

  position: relative;
  z-index: 10;

  @media screen and (max-width:  782px) {
    padding-top: 50px;
  }

  @media screen and (max-width:  480px) {
    padding-top: 30px;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 311px;
    width: 100%;
    transform: translate(50%, 0);
    z-index: -1;

    @media screen and (max-width:  1080px) {
      max-width: 211px;
      transform: translate(53%, 0);
    }

    @media screen and (max-width:  782px) {
      max-width: 120px;
      transform: translate(65%, 0);
    }

    @media screen and (max-width:  480px) {
      max-width: 72px;
      transform: translate(99%, 0);
    }
  }

  &__bg {
    display: none;

    @media screen and (max-width: 680px) {
      display: block;
    }
  }
}

.fade-sidebar-enter-active,
.fade-sidebar-leave-active {
  transition: all 0.5s ease;
}

.fade-sidebar-enter-from,
.fade-sidebar-leave-to {
  transform: translateX(130px);
  opacity: 0;
}

.logo {
  cursor: pointer;
}

</style>
