<template>
  <div class="music">
    <p>thsi is music page</p>
    <button class="back" @click="backToUpper">返回</button>
  </div>
</template>
<script>
  export default {
    name: 'music',
    methods: {
      backToUpper () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .music {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
