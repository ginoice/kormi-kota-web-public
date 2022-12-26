<template>
  <div class="table-main">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'TableInnerComponent'
}

</script>

<style lang="scss" scoped>
.table-main {
  width: 100%;
  margin-top: 60px;
  overflow: hidden;
}
</style>
