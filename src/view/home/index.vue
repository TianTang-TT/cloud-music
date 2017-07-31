<template>
  <div class="home">
    <header :is="header"></header>
    <ul class="main-tabs">
      <li class="tab"><router-link to="/recommend" class="tab-link">推荐音乐</router-link></li>
      <li class="tab"><router-link to="/hot" class="tab-link">热歌榜</router-link></li>
      <li class="tab"><router-link to="/search" class="tab-link">搜索</router-link></li>
    </ul>
    <div class="main-content" id="main-content">
      <transition 
        :enter-active-class="'animated ' + (forward ? 'slideInRight' : 'slideInLeft')"
        :leave-active-class="'animated ' + (forward ? 'slideOutLeft' : 'slideOutRight')">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>  
    </div> 
  </div>
</template>
<script>
  import Header from './Header'
  export default {
    name: 'home',
    data () {
      return {
        header: Header,
        forward: true,
        contentHeight: ''
      }
    },
    watch: {
      $route (to, from) {
        if (to.meta.cat === 'home' && from.meta.cat === 'home') {
          this.forward = (to.meta.index > from.meta.index)
        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .home {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
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
          @include fontpx(30);
          color: #333;
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
    .main-content {
      position: absolute;
      top: 2.773333rem;
      bottom: 0;
      width: 100%;
      overflow: auto;
    }
  }
</style>

