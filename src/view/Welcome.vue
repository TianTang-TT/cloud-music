<template>
  <div class="welcome">
    <p class="welcome-text">时光时光慢些吧...</p>
  </div>
</template>
<script>
  export default {
    name: 'welcome',
    mounted () {
      setTimeout(() => {
        this.$router.replace({path: '/'})
      }, 1000)
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .welcome {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #d43c33;
    .welcome-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      @include fontpx(40);
    }
  }
</style>
