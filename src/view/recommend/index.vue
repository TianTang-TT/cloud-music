<template>
  <div class="recommend-section">
    <section-title title="推荐歌单"></section-title>
    <section class="song-lists">
      <div class="lists">
        <song-list :list="list" v-for="list of recommendListData" key></song-list>
      </div>
    </section>
    <section-title title="最新音乐"></section-title>
    <div class="songs">
      <song v-for="song in newSongs" :songData="song" key></song>
    </div>
  </div>
</template>
<script>
  import SectionTitle from './SectionTitle.vue'
  import SongList from './SongList.vue'
  import { newsong, recommendList } from 'api/recommend'

  export default {
    name: 'recommend',
    components: {
      SectionTitle, SongList
    },
    data () {
      return {
        recommendListData: [],
        newSongs: []
      }
    },
    methods: {
      searchRecommendList () {
        recommendList().then(res => {
          if (res.status === 200) {
            this.recommendListData = res.data
          }
        })
      },
      searchSongList () {
        newsong().then(res => {
          this.newSongs = res.data.result
        })
      }
    },
    mounted () {
      this.searchRecommendList()
      this.searchSongList()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .recommend-section {
    padding-top: 0.533333rem;
  }
</style>
