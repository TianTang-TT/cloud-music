<template>
  <p class="section-title">
    {{ title }}
  </p>
</template>
<script>
  export default {
    name: 'section-title',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .section-title {
    height: 0.533333rem;
    line-height: 0.533333rem;
    @include fontpx(34);
    padding-left: 0.24rem;
    margin-bottom: 0.373333rem;
    position: relative;
    &::before {
      content: '';
      width: 0.053333rem;
      height: 0.533333rem;
      background-color: #d33a31;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
</style>
