<template>
  <section class="banner">
    <div class="container">
      <div class="banner__body body">

        <div class="body__left left">
          
          <h1 class="left__title">
            <img class="left__title__img" src="@/assets/images/home/banner/label.png" alt="">
            kormi<br>kota
          </h1>
          <p class="left__sub-title">
            NFT коллекция для помощи животным
          </p>
        </div>

        <div class="body__right right">
          <img ref="target" class="right__big-cat" src="@/assets/images/home/banner/big-cat.png" alt="cat">
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from '@vue/runtime-core'

export default {
  name: 'BannerComponent',

  setup () {
    const target = ref()
    
    const onScroll = () => {
      let scrolled = document.documentElement.scrollTop
      let rate = scrolled / 10

      if (window.screen.width > 1090) {
        if (rate < 45) {
          target.value.style.transform = `translate3d(0px, ${rate}px, 0px) translate(-1%, -17%)`
        }
      }
      
      if ( window.screen.width <= 1090 && window.screen.width > 600 ) {
        if (rate < 45) {
          target.value.style.transform = `translate3d(0px, ${rate}px, 0px) translate(12%, -12%)`
        }
      }
      
      if ( window.screen.width <= 600  && window.screen.width > 400) {
        if (rate < 45) {
          target.value.style.transform = `translate3d(0px, ${rate}px, 0px) translate(0, 0)`
        }
      }

      if ( window.screen.width <= 400  && window.screen.width > 375 ) {
        if (rate < 45) {
          target.value.style.transform = `translate3d(0px, ${rate}px, 0px) translate(0, 20%) scale(1.3)`
        }
      }

      if ( window.screen.width <= 375 ) {
        if (rate < 45) {
          target.value.style.transform = `translate3d(0px, ${rate}px, 0px) translate(10%, 30%) scale(1.6)`
        }
      }
    }

    onMounted(() => {
      document.addEventListener('scroll', onScroll)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('scroll', onScroll)
    })

    return {
      target
    }
  }
}

</script>

<style lang="scss" scoped>
.body {
  padding-top: 97px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 10;

  @media screen and (max-width: 1090px) {
    padding-top: 50px;
  }

  @media screen and (max-width: 930px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    align-items: flex-start;
  }
}

.left {
  @media screen and (max-width: 930px) {
    transform: translateX(-30%);
  }
  @media screen and (max-width: 750px) {
    transform: translateX(-10%);
  }
  @media screen and (max-width: 600px) {
    transform: translateX(0);
  }
  &__title {
    font-family: 'RussoOne', sans-serif;
    font-weight: 400;
    font-size: 200px;
    line-height: 88%;
    color: #000;

    position: relative;

    @media screen and (max-width: 1090px) {
      font-size: 150px;
    }

    @media screen and (max-width: 600px) {
      font-size: 100px;
    }

    &__img {
      position: absolute;
      top: -80px;
      left: -70px;
      width: 140px;
      height: 140px;
      animation: 2s linear 0s normal none infinite running spin;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(-360deg);
        }
      }

      @media screen and (max-width: 930px) {
        top: auto;
        left: auto;
        bottom: 20%;
        right: -10%;
      }

      @media screen and (max-width: 600px) {
        width: 100px;
        height: 100px;
      }
    }

    &::before {
      content: '';

      position: absolute;
      bottom: 0;
      right: 0;
      width: 251px;
      height: 275px;

      background: url('~@/assets/images/home/banner/arrow.svg') no-repeat center top / contain;
      transform: translate(39%, 31%);


      @media screen and (max-width: 1090px) {
        transform: translate(66%, 52%);
      }

      @media screen and (max-width: 930px) {
        transform: translate(124%, 52%) rotate(286deg) matrix(-1, 0, 0, 1, 0, 0);
      }

      @media screen and (max-width: 750px) {
        transform: translate(73%, 68%) rotate(286deg) matrix(-1, 0, 0, 1, 0, 0);
      }

      @media screen and (max-width: 600px) {
        transform: translate(95%, 68%) rotate(314deg) matrix(-1, 0, 0, 1, 0, 0);
      }

      @media screen and (max-width: 480px) {
        width: 210px;
        transform: translate(78%, 79%) rotate(302deg) matrix(-1, 0, 0, 1, 0, 0)
      }

      @media screen and (max-width: 400px) {
        top: 0;
        left: 0;
        width: 160px;
        transform: translate(-10%, 79%) rotate(75deg) matrix(1, 0, 0, 1, 0, 0)
      }

      @media screen and (max-width: 375px) {
        top: 0;
        left: 0px;
        width: 195px;
        transform: translate(-16%, 67%) rotate(84deg) matrix(1, 0, 0, 1, 0, 0);
      }
    }
  }

  &__sub-title {
    font-weight: 500;
    font-size: 28px;
    line-height: 152%;

    max-width: 422px;
    margin-top: 35px;

    @media screen and (max-width: 600px) {
      font-size: 20px;
      max-width: 300px;
    }

    @media screen and (max-width: 375px) {
      max-width: 200px;
      margin-top: 12px;
    }
  }
}

.right {
  position: relative;

  &::before {
    content: '';

    position: absolute;
    bottom: 0;
    right: 0;
    width: 251px;
    height: 275px;

    background: url('~@/assets/images/home/banner/cat.png') no-repeat center top / contain;

    @media screen and (max-width: 1130px) {
      transform: translate(26%, 2%);
    }

    @media screen and (max-width: 1015px) {
      transform: translate(39%, 0%);
    }

    @media screen and (max-width: 975px) {
      transform: translate(39%, 10%);
    }

    @media screen and (max-width: 930px) {
      display: none;
    }
  }

  &__big-cat {
    transition: all .3s;
    max-width: 600px;
    width: 100%;
    transform: translate(-1%, -17%);

    @media screen and (max-width: 1090px) {
      transform: translate(12%, -12%);
    }

    @media screen and (max-width: 600px) {
      transform: translate(0, 0);
    }

    @media screen and (max-width: 400px) {
      transform: translate(0, 20%) scale(1.3);
    }

    @media screen and (max-width: 340px) {
      transform: translate(0, 30%) scale(1.3);
    }
  }
}
</style>
