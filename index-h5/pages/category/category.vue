<template>
  <view class="category-box">
    <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
      @scroll="scroll">
      <view @click="changeItem(item)" id="demo1" class="scroll-view-item uni-bg-red" v-for="item in categoryList"
        :key="item.id">{{ item.name }}
      </view>
    </scroll-view>
    <view class="category-right">
      <view class="list-item" v-for="item in catetoryItem" :key="item.id">{{ item.name }}</view>
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
        categoryList: [],
        /** 分类子项*/
        catetoryItem: [],
      })
      /** 请求全部分类 */
      getCategory().then(res => {
        data.categoryList = res.data.data
        data.catetoryItem = data.categoryList[0].labelList
      })
      /** 点击左侧改变右侧数据 */
      const changeItem = (item) => {
        data.catetoryItem = item.labelList
      }
      return {
        ...toRefs(data),
        changeItem
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
      width: 180rpx;
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

    .category-right view {
      width: 150rpx;
      height: 80rpx;
      font-size: 20rpx;
      border: 1px solid #ccc;
      float: left;
      margin-top: 30rpx;
      margin-left: 25rpx;
      text-align: center;
      line-height: 80rpx;
      border-radius: 40rpx;
    }
  }
</style>
