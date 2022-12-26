<template>
  <main class="name">
    <router-view/>
  </main>
</template>

<script>
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {},
  setup () {
    onMounted(() => {
    })
  }
}
</script>

<style lang="scss">
</style>
