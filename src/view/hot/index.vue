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
