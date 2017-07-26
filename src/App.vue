<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
