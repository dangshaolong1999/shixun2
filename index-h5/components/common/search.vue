<template>
  <view class="uni-search-box">
    <input class="uni-input" placeholder="搜索你想要的内容" disabled />
  </view>
</template>

<script>
</script>
<style lang="scss">
  .uni-search-box {
    position: fixed;
    left: 0;
    top: 30rpx;
    z-index: 99;
    width: 100%;

    .uni-input {
      background-color: #f8f8f8;
      height: 70rpx;
      line-height: 40rpx;
      text-align: center;
      border-radius: 30rpx;
      margin: 0 20rpx;
    }
  }
</style>
