<template>
  <view class="uni-margin-wrap">
    <swiper class="swiper" circular indicator-dots="true" indicator-active-color="#fff" autoplay="true">
      <swiper-item v-for="item,index in swipeList" :key="index">
        <view class="swiper-item uni-bg-red">
          <image :src="item.imageUrl"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  export default {
    props: ['swipeList'],
    setup(props, context) {
      return {}
    }
  }
</script>

<style lang="scss">
  .uni-margin-wrap {
    width: 690rpx;
    width: 100%;
  }

  .swiper {
    height: 300rpx;
    margin-top: 150rpx;
  }

  .swiper-item {
    display: block;
    height: 300rpx;
    line-height: 300rpx;
    text-align: center;
  }

  .swiper-list {
    margin-top: 40rpx;
    margin-bottom: 0;
  }

  image {
    height: 100%;
    border-radius: 30rpx;
  }
</style>
