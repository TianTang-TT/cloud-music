<template>
  <header class="header">
    <span class="title">网易云音乐</span>
    <span class="download">下载APP</span>
  </header>
</template>
<script>
  export default {
    name: 'header'
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 1.706667rem;
    background-color: #d43c33;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.266667rem;
    box-sizing: border-box;
    .title {
      color: #fff;
    }
    .download {
      color: #fff;
      border: 1px solid;
      border-radius: 0.4rem;
      padding: 0 0.266667rem;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
    }
  }
</style>
