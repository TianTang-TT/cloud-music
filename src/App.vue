<template>
  <div id="app" :style="{height: appHeight + 'px'}">
    <transition 
      :enter-active-class="'animated ' + (forward ? 'slideInRight' : 'slideInLeft')"
      :leave-active-class="'animated ' + (forward ? 'slideOutLeft' : 'slideOutRight')">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      appHeight: '',
      forward: true
    }
  },
  created () {
    this.appHeight = window.innerHeight
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "~assets/scss/index";
  #app {
    position: relative;
  }
</style>
