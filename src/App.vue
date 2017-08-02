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
      appHeight: ''
    }
  },
  computed: {
    forward () {
      return this.$store.state.operate === 'forward'
    }
  },
  watch: {
    $route (to, from) {
      let toRoute = to.matched[0]
      if (toRoute.meta.level !== 'app') return
      this.$store.dispatch('navigate', toRoute)
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
