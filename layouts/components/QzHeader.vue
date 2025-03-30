<script setup lang="ts">

</script>

<template>
  <div class="layout-header">
    21312321231
    <slot/>
  </div>
</template>

<style scoped lang="scss">
@use "@layouts/styles/default-style.scss" as default-style;
.layout-header{
  height: default-style.$layout-header-height;
}
</style>