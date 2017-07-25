<template>
  <div class="home">
    <cm-header></cm-header>
    <ul class="main-tabs">
      <li class="tab"><router-link to="/recommend" class="tab-link">推荐音乐</router-link></li>
      <li class="tab"><router-link to="/hot" class="tab-link">热歌榜</router-link></li>
      <li class="tab"><router-link to="/search" class="tab-link">搜索</router-link></li>
    </ul>
    <div class="main-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>   
    </div> 
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
  .home {
    overflow: hidden;
    padding-top: 2.773333rem;
    .main-tabs {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #dfdfdf;
      background-color: #fff;
      position: fixed;
      left: 0;
      top: 1.706667rem;
      z-index: 3;
      .tab {
        flex: 1;
        height: 1.066667rem;
        line-height: 1.066667rem;
        text-align: center;
        a {
          color: #333;
          font-size: 0.4rem;
          display: inline-block;
          height: 100%;
          padding: 0 0.133333rem;
          &.router-link-active {
            color: #d33a31;
            border-bottom: 0.053333rem solid #d33a31;
          }
        }
      }
    }
  }
</style>

