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
  watch: {
    $route (to, from) {
      if (!to.meta.level) return
      if (to.name === 'play' || from.name === 'welcome') {
        this.forward = true
      } else {
        this.forward = false
      }
      // this.$store.dispatch('navigate', to)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "~assets/scss/index";
  #app {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
