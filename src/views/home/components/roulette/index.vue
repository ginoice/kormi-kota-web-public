<template>
  <section class="roulette">
    <div class="roulette__body body">

      <top-content-component />
      <center-content-component />

    </div>
  </section>
</template>

<script>
import TopContentComponent from './components/top-content.vue'
import CenterContentComponent from './components/ceter-content.vue'

export default {
  name: 'RouletteComponent',
  components: { TopContentComponent, CenterContentComponent }
}

</script>

<style lang="scss" scoped>
.body {
  padding: 0 0 200px 0;

  @media screen and (max-width: 1160px) {
    padding: 300px 0 200px 0;
  }

  @media screen and (max-width: 560px) {
    padding: 180px 0 200px 0;
  }

  @media screen and (max-width: 420px) {
    padding: 70px 0 0 0;
  }
}
</style>
