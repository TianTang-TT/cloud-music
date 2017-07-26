<template>
  <div class="hot-section">
    <hot-band></hot-band>
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
        hotSongs: []
      }
    },
    methods: {
      getHotSongs () {
        getHotMusic().then(res => {
          if (res.status === 200) {
            this.hotSongs = res.data.playlist
          }
        })
      }
    }
  }
</script>
