<template>
  <view class="content">
    <!-- 返回顶部 -->
    <back-top :top='scrollTop'></back-top>
    <!-- 轮播图 -->
    <banner-box :swipeList="swipe"></banner-box>
    <div class="category-box">
      <div class="list-item" v-for="item in categoryList" :key="item.id">{{ item.name }}</div>
      <div class="list-item">全部分类</div>
    </div>
    <hot-box :hot1='hotList1' :hot2="hotList2"></hot-box>
    <new-box :new='newList'></new-box>
    <free-box :free1='freeList1' :free2="freeList2"></free-box>
    <isfree-box :isfree='isFreeList'></isfree-box>
  </view>
</template>

<script>
  import BannerBox from '@/components/common/banner.vue'
  import HotBox from '@/components/indexChild/hot.vue'
  import NewBox from '@/components/indexChild/new.vue'
  import FreeBox from '@/components/indexChild/free.vue'
  import IsfreeBox from '@/components/indexChild/isfree.vue'
  import BackTop from '@/components/common/Back-top.vue'
  import {
    onPageScroll
  } from '@dcloudio/uni-app'
  import {
    ref,
    reactive,
    toRefs
  } from 'vue'
  import {
    getbanner,
    getCategory,
    getHotList,
    getNewList,
    getFreeList,
    getisFreeList
  } from '@/api/index.js'
  export default {
    components: {
      BannerBox,
      HotBox,
      NewBox,
      FreeBox,
      IsfreeBox,
      BackTop
    },
    setup(props, context) {
      let data = reactive({
        /** 轮播图 */
        swipe: [],
        /** 全部分类 */
        categoryList: [],
        /** 热门推荐 */
        hotList1: [],
        hotList2: [],
        /** 近期上新 */
        newList: [],
        /** 免费精品 */
        freeList1: [],
        freeList2: [],
        /** 付费精品 */
        isFreeList: [],
        moer: Boolean,
        /** 滚动高度 */
        scrollTop: 0
      })
      /** 请求轮播图数据 */
      getbanner().then(res => {
        data.swipe = res.data.data
      })
      /** 请求全部分类 */
      getCategory().then(res => {
        data.categoryList = res.data.data.slice(0, 7)
      })
      /** 请求热门推荐 */
      getHotList({
        sort: 'hot',
        current: 1,
        size: 10
      }).then(res => {
        data.hotList1 = res.data.data.records.slice(0, 5)
        data.hotList2 = res.data.data.records.slice(5, 10)
      })
      /** 请求近期上新 */
      getNewList({
        sort: 'new',
        current: 1,
        size: 10
      }).then(res => {
        data.newList = res.data.data.records
      })
      /** 请求免费精品 */
      getFreeList({
        isFree: 1,
        current: 1,
        size: 10
      }).then(res => {
        data.freeList1 = res.data.data.records.slice(0, 5)
        data.freeList2 = res.data.data.records.slice(5, 10)
      })
      /** 请求付费精品 */
      getisFreeList({
        isFree: 0,
        current: 1,
        size: 10
      }).then(res => {
        data.isFreeList = res.data.data.records
      })
      window.onscroll = function() {
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;
        if (data.isFreeList.length < 60) {} else {
          data.moer = true
        }
        if (scrollTop + clientHeight >= scrollHeight) {
          getisFreeList().then(res => {
            if (data.isFreeList.length < 60) {
              data.isFreeList = [...data.isFreeList, ...res.data.data.records]
            }
          })
        }
      }
      onPageScroll((e) => {
        data.scrollTop = e.scrollTop
      })
      return {
        ...toRefs(data),
      }
    }
  }
</script>

<style lang="scss">
  .category-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20rpx;

    .list-item {
      width: 18%;
      text-align: center;
      background-color: #f8f9fb;
      padding: 15rpx 10rpx;
      margin: 10rpx 5rpx;
      border-radius: 8rpx;
    }
  }
</style>
