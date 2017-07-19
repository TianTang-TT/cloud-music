<template>
  <div class="recommend-section">
    <section-title title="推荐歌单"></section-title>
    <section class="song-lists">
      <song-list :list="list" v-for="list of songList" key></song-list>
    </section>
    <section-title title="最新音乐"></section-title>
  </div>
</template>
<script>
  import SectionTitle from './SectionTitle.vue'
  import SongList from './SongList.vue'
  import { newsong } from 'api/recommend'

  export default {
    name: 'recommend',
    components: {
      SectionTitle, SongList
    },
    data () {
      return {
        songList: [
          {
            id: 513556597,
            type: 0,
            name: '【有一种喜剧叫做周星驰】星爷电影配乐精选',
            copywriter: '编辑推荐：一声星爷，一生星爷',
            picUrl: 'http://p1.music.126.net/B29Wo2R_Uaw6E0n6tnWDkg==/18587244068844908.jpg',
            canDislike: false,
            playCount: 320572,
            trackCount: 41,
            highQuality: false,
            alg: 'featured'
          }, {
            id: 807810108,
            type: 0,
            name: '盛夏时光，听一场被雨打湿的电影',
            copywriter: '编辑推荐：因为有雨，让这些光影故事增添了不一样的情感色彩',
            picUrl: 'http://p1.music.126.net/mKf6FP6SAdCJI_Gajuti1g==/18990764835187767.jpg',
            canDislike: false,
            playCount: 125692,
            trackCount: 50,
            highQuality: false,
            alg: 'featured'
          }, {
            id: 767793998,
            type: 0,
            name: '夏虫不语冰，愿有人能陪你走过四季',
            copywriter: '热门歌单推荐',
            picUrl: 'http://p1.music.126.net/qxJ_Ckl0XR-bPcm6t8Rxsw==/109951162952233827.jpg',
            canDislike: true,
            playCount: 1528357.4,
            trackCount: 47,
            highQuality: false,
            alg: 'hot_server'
          }, {
            id: 699233809,
            type: 0,
            name: '〖流行〗ACG，就该是这个感觉',
            copywriter: '热门歌单推荐',
            picUrl: 'http://p1.music.126.net/zw_Hb639JS5EksVdJAqLOA==/109951162905525558.jpg',
            canDislike: true,
            playCount: 843127.6,
            trackCount: 77,
            highQualit: false,
            alg: 'hot_server'
          }, {
            id: 779925371,
            type: 0,
            name: '假装活在1997 (日语篇）',
            copywriter: '热门歌单推荐',
            picUrl: 'http://p1.music.126.net/ZGmPQdzPmjQKLZJ6Nd2iDg==/18594940650901169.jpg',
            canDislike: true,
            playCount: 1134330.6,
            trackCount: 30,
            highQuality: false,
            alg: 'hot_server'
          }, {
            id: 711430502,
            type: 0,
            name: '百首好听的著名产品广告歌曲',
            copywriter: '热门歌单推荐',
            picUrl: 'http://p1.music.126.net/05Je1V0fOMlvLkxepzN1qw==/109951162922933412.jpg',
            canDislike: true,
            playCount: 1191630.2,
            trackCount: 175,
            highQuality: false,
            alg: 'hot_server'
          }
        ]
      }
    },
    methods: {
      searchSongList () {
        newsong().then(res => {
          console.log('.....')
          console.log(res)
        })
      }
    },
    mounted () {
      this.searchSongList()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .recommend-section {
    padding-top: 0.533333rem;
  }
</style>
