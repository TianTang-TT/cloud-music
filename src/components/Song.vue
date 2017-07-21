<template>
  <a class="song-wrapper">
    <div class="song">
      <div class="message">
        <p class="song-name">{{ songData.name }}</p>
        <p class="song-detail">{{ songData.song.artists[0].name }}</p>
      </div>
      <div class="play">
        <span class="play-key"></span>
      </div>
    </div>
  </a>
</template>
<script>
  export default {
    name: 'song',
    props: {
      songData: {
        required: true,
        type: Object
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .song-wrapper {
    display: flex;
    padding-left: 0.266667rem;
    .song {
      flex: 1;
      padding: 0.32rem 0;
      border-bottom: 1px solid #dfdfdf;
      display: flex;
      .message {
        flex: 1;
        .song-name {
          height: 0.666667rem;
          line-height: 0.666667rem;
          font-size: 0.453333rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .song-detail {
          height: 0.48rem;
          line-height: 0.48rem;
          font-size: 0.32rem;
          color: #888;
        }
      }
      .play {
        width: 1.066667rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .play-key {
          width: 0.586667rem;
          height: 0.586667rem;
          border-radius: 50%;
          border: 2px solid gray;
          position: relative;
          &:before {
            content: '';
            display: block;
            width: 0;
            height: 0;
            border: 0.16rem solid;
            border-color: transparent transparent transparent gray;
            position: absolute;
            left: 0.186667rem;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
</style>
