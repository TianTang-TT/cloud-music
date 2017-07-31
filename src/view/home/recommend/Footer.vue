<template>
  <footer class="footer">
    <div class="fwrap">
      <p class="title">网易云音乐</p>
      <div class="app-button">打开app，发现更多好音乐</div>
      <p class="desc">版权所有 惊蛰  仿页面效果，不提供商用</p>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'cm-footer'
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .footer {
    position: relative;
    padding-top: 53.3%;
    margin-top: 0.106667rem;
    .fwrap {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      text-align: center;
      background: url('~assets/imgs/recommand_bg_2x.png')no-repeat;
      background-size: contain;
      .title {
        line-height: 1.173333rem;
        padding-top: 17%;
        text-align: center;
        font-size: 0.666667rem;
      }
      .app-button {
        line-height: 1.013333rem;
        border: 2px solid #d33a31;
        border-radius: 1.013333rem;
        font-size: 0.426667rem;
        color: #d33a31;
        margin: 0.4rem 0.986667rem 0.133333rem;
      }
      .desc {
        color: #888;
        font-size: 0.32rem;
        line-height: 0.426667rem;
        -webkit-transform: scale(.75);
        transform: scale(.75);
      }
    }
  }
</style>
