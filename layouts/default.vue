<script setup lang="ts">
import QzHeader from './components/QzHeader.vue'
import QzAsideBar from './components/QzAsideBar.vue'


</script>

<template>
  <div class="qz-layout">
    <QzHeader/>
    <slot/>
    <QzAsideBar/>
  </div>
</template>

<style scoped lang="scss">
</style>