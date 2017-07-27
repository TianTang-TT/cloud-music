<template>
  <div id="app">
    <transition class="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "~assets/scss/index";
</style>
