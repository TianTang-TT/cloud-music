<template>
  <div class="home">
    <cm-header></cm-header>
    <ul class="header-tab">
      <li class="tab"><router-link to="/recommend" class="tab-link">推荐音乐</router-link></li>
      <li class="tab"><router-link to="/hot" class="tab-link">热歌榜</router-link></li>
      <li class="tab"><router-link to="/search" class="tab-link">搜索</router-link></li>
    </ul>
    <router-view>

    </router-view>
  </div>
</template>
<script>
  import Header from 'components/Header'
  export default {
    name: 'home',
    components: {
      CmHeader: Header
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    position: relative;
    .header-top {
      height: 1.706667rem;
    }
  }
</style>

