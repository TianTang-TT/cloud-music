<template>
  <div class="play">
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
      width: 200px;
      height: 100px;
      border: none;
      outline: none;
      border-radius: 10px;
      background: #d33a31;
      font-size: 40px;
    }
  }
</style>
