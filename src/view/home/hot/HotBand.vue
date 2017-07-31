<template>
  <div class="hotband">
    <div class="hot-content">
      <p class="title">云音乐</p>
      <p class="hot-logo">热歌榜</p>
      <p class="update">更新日期：07月26日</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hotband'
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .hotband {
    position: relative;
    padding-top: 38.9%;
    overflow: hidden;
    background: url('~assets/imgs/hot_music_bg_2x.jpg') no-repeat;
    background-size: contain;
    .hot-content {
      padding-left: 0.533333rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
      color: #fff;
      .title {
        @include fontpx(32);
      }
      .hot-logo {
        @include fontpx(80);
        margin: 0.266667rem 0;
      }
      .update {
        @include fontpx(32);
      }
    }
  }
</style>
