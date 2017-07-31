<template>
  <div class="song-list">
      <div class="img-wrap">
        <img :src="list.picUrl" class="list-avatar">
        <span class="subscriber">{{ list.playCount }}</span>
      </div>
      <p class="list-desc">
        {{ list.name }}
      </p>
  </div>
</template>
<script>
  export default {
    name: 'song-list',
    props: {
      list: {
        required: true,
        type: Object
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .song-list {
    display: inline-block;
    width: 33.33%;
    padding-bottom: 0.426667rem;
    vertical-align: top;
    .img-wrap {
      position: relative;
      padding-bottom: 100%;
      font-size: 0;
      .list-avatar {
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
        @include fontpx(28);
      }
    }
    .list-desc {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.2;
      @include fontpx(26);
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0.16rem 0.053333rem 0 0.16rem;
    }
  }
</style>
