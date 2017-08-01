<template>
  <div class="player-container">
    <div class="player">
      <div class="player-disc" @click="playMusic" id="palyerDisc">
        <div class="song">
          <img src="~assets/imgs/song-img.webp" alt="" class="song-img">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'player',
    methods: {
      playMusic (e) {
        document.querySelector('#palyerDisc').classList.toggle('playing')
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @keyframes circling {
    0% { transform: rotate(0deg) }
    25%{ transform: rotate(90deg) }
    50%{ transform: rotate(180deg) }
    75%{ transform: rotate(270deg) }
    100%{ transform: rotate(360deg) }
  }
  .player-container {
    padding-top: 2.133333rem;
    .player {
      width: 7.893333rem;
      height: 7.893333rem;
      margin: 0 auto;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 4.266667rem;
        width: 2.56rem;
        height: 3.653333rem;
        background: url('~assets/imgs/needle-ip6.png') no-repeat;
        background-size: contain;
      }
      .player-disc {
        width: 100%;
        height: 100%;
        position: relative;
        &.playing {
          &:before {
            animation: none;
          }
          .song {
            .song-img {
              animation: none;
            }
          }
        }
        &:before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: url('~assets/imgs/disc-plus.png') no-repeat;
          background-size: contain;
          animation: circling 20s infinite linear; 
        }
        .song {
          width: 4.906667rem;
          height: 4.906667rem;
          border-radius: 50%;
          overflow: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          .song-img {
            width: 100%;
            height: 100%;
            animation: circling 20s infinite linear; 
          }
        }
      }
    }
  }
</style>
