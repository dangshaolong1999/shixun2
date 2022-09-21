<template>
  <view class="category-box">
    <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
      @scroll="scroll">
      <view id="demo1" class="scroll-view-item uni-bg-red" v-for="item in categoryList" :key="item.id">{{ item.name }}
      </view>
    </scroll-view>
    <view class="category-right">
      右侧
    </view>
  </view>
</template>

<script>
  import {
    reactive,
    toRefs
  } from "vue";
  import {
    getCategory
  } from '@/api/index.js'
  export default {
    setup() {
      let data = reactive({
        /** 全部分类 */
        categoryList: []
      })
      /** 请求全部分类 */
      getCategory().then(res => {
        data.categoryList = res.data.data
      })
      return {
        ...toRefs(data),
      }
    }
  }
</script>

<style lang="scss">
  .category-box {
    display: flex;

    .scroll-Y {
      width: 200rpx;
      background-color: #f8f9fb;
    }

    .scroll-view_H {
      white-space: nowrap;
    }

    .scroll-view-item {
      height: 200rpx;
      text-align: center;
      font-size: 36rpx;
      line-height: 200rpx;
    }

    .scroll-view-item_H {
      display: inline-block;
      text-align: center;
      font-size: 36rpx;
    }
  }
</style>
