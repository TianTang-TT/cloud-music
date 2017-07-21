<template>
  <div class="recommend-section">
    <section-title title="推荐歌单"></section-title>
    <section class="song-lists">
      <song-list :list="list" v-for="list of recommendListData" key></song-list>
    </section>
    <section-title title="最新音乐"></section-title>
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
        recommendListData: []
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
          console.log(res)
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
