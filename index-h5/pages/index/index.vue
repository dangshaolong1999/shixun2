<template>
  <view class="content">
    <!-- 顶部搜索 -->
    <search-box></search-box>
    <!-- 轮播图 -->
    <banner-box :swipeList="swipe"></banner-box>
    <div class="category-box">
      <div class="list-item" v-for="item in categoryList" :key="item.id">{{ item.name }}</div>
      <div class="list-item">全部分类</div>
    </div>
    <hot-box :hot='hotList'></hot-box>
  </view>
</template>

<script>
  import SearchBox from '@/components/common/search.vue'
  import BannerBox from '@/components/common/banner.vue'
  import HotBox from '@/components/indexChild/hot.vue'
  import {
    ref,
    reactive,
    toRefs
  } from 'vue'
  import {
    getbanner,
    getCategory,
    getHotList
  } from '@/api/index.js'
  export default {
    components: {
      BannerBox,
      SearchBox,
      HotBox
    },
    setup(props, context) {
      let bannerList = reactive({
        /** 轮播图 */
        swipe: [],
        /** 全部分类 */
        categoryList: [],
        /** 热门推荐 */
        hotList: []
      })
      /** 请求轮播图数据 */
      getbanner().then(res => {
        bannerList.swipe = res.data.data
      })
      /** 请求全部分类 */
      getCategory().then(res => {
        bannerList.categoryList = res.data.data.slice(0, 7)
      })
      /** 请求热门推荐 */
      getHotList({
        sort: 'hot',
        current: 1,
        size: 10
      }).then(res => {
        console.log(res);
        bannerList.hotList = res.data.data
      })
      return {
        ...toRefs(bannerList),
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
