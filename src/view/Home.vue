<template>
  <div class="home">
    <header class="header">
      <div class="header-top">
        <span class="title">网易云音乐</span>
        <span class="download">下载APP</span>
      </div>
      <ul class="header-tab">
        <li class="tab"><router-link to="/recommend" class="tab-link">推荐音乐</router-link></li>
        <li class="tab"><router-link to="/hot" class="tab-link">热歌榜</router-link></li>
        <li class="tab"><router-link to="/search" class="tab-link">搜索</router-link></li>
      </ul>
    </header>
    <router-view>

    </router-view>
  </div>
</template>
<script>
  export default {
    name: 'home'
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  @color: red;
</style>

