<template>
  <div class="song-list">
      <div class="img-wrap">
        <img alt="" class="list-avatar">
        <span class="subscriber">115万</span>
      </div>
      <p class="list-desc">
        「华语情歌」想得却不可得，你奈人生何呵呵
      </p>
  </div>
</template>
<script>
  export default {
    name: 'song-list'
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .song-list {
    display: inline-block;
    width: 33.33%;
    padding-bottom: 0.426667rem;
    .img-wrap {
      position: relative;
      padding-bottom: 100%;
      font-size: 0;
      .list-avatar {
        border: 1px solid #dfdfdf;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }
      .subscriber {
        position: absolute;
        top: 0.053333rem;
        right: 0.133333rem;
        z-index: 2;
        color: #fff;
        font-size: 0.373333rem;
      }
    }
    .list-desc {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.2;
      font-size: 0.346667rem;
      overflow: hidden;
      padding: 0.16rem 0.053333rem 0 0.16rem;
    }
  }
</style>
