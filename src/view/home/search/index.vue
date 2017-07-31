<template>
  <div class="search-section">
    <section class="search-bar">
      <div class="input-wrap">
        <input 
        type="search" 
        class="search" 
        v-model="keyword"
        @keydown.13="searchKeyword"
        placeholder="搜索歌手，歌曲，专辑">
      </div>
    </section>
    <section class="hot-search" v-if="searchResult.length==0">
      <h3 class="title">热门搜索</h3>
      <ul class="search-list">
        <li 
          class="item" 
          @click="handleKeySearch(hot)"
          v-for="hot of hots" 
          :value="hot.second">
            {{ hot.first }}
        </li>
      </ul>
    </section>
    <div class="songs">
      <song v-for="(song, index) of searchResult" :songData="song" key type='search'></song>
    </div>
  </div>
</template>
<script>
  import { getHotKeys, searchSongs } from 'api/search'

  export default {
    name: 'search',
    data () {
      return {
        keyword: '',
        hots: [],
        searchResult: []
      }
    },
    watch: {
      keyword (val) {
        if (!val) this.searchResult = []
      }
    },
    methods: {
      searchKeyword () {
        if (!this.keyword) return
        searchSongs(this.keyword).then(res => {
          if (res.status === 200) {
            this.searchResult = res.data.result.songs
          }
        })
      },
      handleKeySearch (hot) {
        this.keyword = hot.first
        this.searchKeyword()
      }
    },
    mounted () {
      getHotKeys().then(res => {
        if (res.status === 200) {
          this.hots = res.data.result.hots
        }
      })
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .search-section {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    animation-duration: .3s;
    .search-bar {
      border-bottom: 1px solid #dfdfdf;
      padding: 0.4rem 0.266667rem;
      .input-wrap {
        width: 100%;
        height: 0.8rem;
        padding: 0 0.8rem;
        position: relative;
        box-sizing: border-box;
        background: #ebecec;
        border-radius: 0.8rem;
        .search {
          width: 100%;
          height: 0.8rem;
          line-height: 0.48rem;
          background: transparent;
          font-size: 0.373333rem;
          color: #333;
          border: 0;
          outline: none;
        }
      }
    }
    .hot-search {
      padding: 0.4rem 0.266667rem 0;
      .title {
        font-size: 0.32rem;
        line-height: 0.32rem;
        color: #666;
      }
      .search-list {
        margin: 0.266667rem 0 0.186667rem;
        .item {
          display: inline-block;
          height: 0.853333rem;
          line-height: 0.853333rem;
          margin-right: 0.213333rem;
          margin-bottom: 0.213333rem;
          padding: 0 0.373333rem;
          font-size: 0.373333rem;
          color: #333;
          border: 1px solid #dfdfdf;
          outline: none;
          border-radius: 0.4rem;
        }
      }
    }
  }
</style>
