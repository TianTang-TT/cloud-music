<template>
  <div class="search-section">
    <section class="search-bar">
      <div class="input-wrap">
        <input type="search" class="search">
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'search'
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .search-section {
    .search-bar {
      padding: 0.4rem 0.266667rem;
      .input-wrap {
        width: 100%;
        height: 0.8rem;
        padding: 0 0.8rem;

      }
    }
  }
</style>
