<template>
  <div class="hot-section">
    <hot-band></hot-band>
    <div class="songs">
      <song v-for="(song, index) of hotSongs.tracks" :songData="song" key type="hot" :index="index"></song>
    </div>
  </div>
</template>
<script>
  import HotBand from './HotBand.vue'
  import { getHotMusic } from 'api/hot'

  export default {
    name: 'hot',
    components: {
      HotBand
    },
    data () {
      return {
        hotSongs: {}
      }
    },
    methods: {
      getHotSongs () {
        getHotMusic().then(res => {
          if (res.status === 200) {
            console.log(res.data)
            this.hotSongs = res.data.playlist
          }
        })
      }
    },
    mounted () {
      this.getHotSongs()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .hot-section {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 1200px;
    overflow: auto;
    animation-duration: .3s;
  }
</style>
