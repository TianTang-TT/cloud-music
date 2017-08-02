<template>
  <div class="play">
    <span class="back" @click="backToUpper"></span>
    <player></player>
  </div>
</template>
<script>
  import Player from './Player'
  export default {
    name: 'play',
    components: {
      Player
    },
    methods: {
      backToUpper () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .play {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, .3);
    .back {
      width: 0.533333rem;
      height: 0.533333rem;
      border: solid #fff;
      border-width: 4px 0 0 4px;
      transform: rotate(-45deg);
      position: absolute;
      top: 0.266667rem;
      left: 0.266667rem;
    }
  }
</style>
