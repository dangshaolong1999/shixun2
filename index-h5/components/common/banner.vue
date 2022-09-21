<template>
  <view class="uni-margin-wrap">
    <swiper class="swiper" circular indicator-dots="true" indicator-active-color="#fff" autoplay="true"
      @change="changeBack" :style="backgrundColor">
      <swiper-item v-for="item,index in swipeList" :key="index">
        <view class="swiper-item uni-bg-red">
          <image :src="item.imageUrl"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>
<script>
  import {
    reactive,
    toRefs
  } from 'vue'
  export default {
    props: ['swipeList'],
    setup(props, context) {
      let data = reactive({
        backgrundColor: 'background: linear-gradient(rgb(0, 108, 0) 50%, rgb(255, 255, 255))'
      })
      const changeBack = (e) => {
        if (e.detail.current == 0) {
          data.backgrundColor = 'background: linear-gradient(rgb(0, 108, 0) 50%, rgb(255, 255, 255))'
        } else if (e.detail.current == 1) {
          data.backgrundColor = 'background: linear-gradient(rgb(69, 50, 140) 50%, rgb(255, 255, 255))'
        } else {
          data.backgrundColor = 'background: linear-gradient(rgb(0, 114, 183) 50%, rgb(255, 255, 255))'
        }
      }
      return {
        ...toRefs(data),
        changeBack
      }
    }
  }
</script>

<style lang="scss">
  .uni-margin-wrap {
    width: 100%;
  }

  .swiper {
    height: 560rpx;
  }

  .swiper-item {
    margin-top: 150rpx;
    display: block;
    height: 400rpx;
    // line-height: 300rpx;
    text-align: center;
  }

  .swiper-list {
    margin-top: 40rpx;
    // margin-bottom: 0;
  }

  image {
    height: 400rpx;
    border-radius: 30rpx;
  }
</style>
