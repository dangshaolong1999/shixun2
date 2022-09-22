<template>
  <view class="article-box">
    <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
      <view id="demo1" class="scroll-view-item_H uni-bg-red" @click="getList">推荐</view>
      <view id="demo1" class="scroll-view-item_H uni-bg-red" v-for="(item,index) in readHeaderList" :key="item.id"
        @click="getList(item.id)">
        {{ item.name }}
      </view>
    </scroll-view>
    <view class="article-list">
      <view class="course-item" v-for="item in recommenList" :key="item.id">
        <view class="item-left">
          <view class="title">{{ item.title }}</view>
          <view class="desc">{{ item.summary }}</view>
          <view class="info">
            <view class="name">{{ item.nickName }}</view>
            <view class="time">{{ item.updateDate }}</view>
            <view class="good">{{ item.thumhup }}赞</view>
          </view>
        </view>
        <view class="item-right">
          <image class="course-img" :src="item.imageUrl" mode=""></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    onPageScroll
  } from '@dcloudio/uni-app'
  import {
    reactive,
    toRefs
  } from "vue";
  import {
    getReadList,
    getReadHeader,
    changeReadList
  } from '@/api/index.js'
  export default {
    setup() {
      let data = reactive({
        /** 头部分类 */
        readHeaderList: [],
        /** 数据 */
        recommenList: []
      })
      /** 请求全部分类 */
      getReadHeader().then(res => {
        data.readHeaderList = res.data.data
      })
      getReadList({
        size: 10,
        current: 1
      }).then(res => {
        data.recommenList = res.data.data.records
      })
      const getList = (id) => {
        if (id === null) {
          getReadList({
            size: 10,
            current: 1
          }).then(res => {
            data.recommenList = res.data.data.records
          })
        } else {
          changeReadList({
            categoryId: `${id}`,
            size: 10,
            current: 1
          }).then(res => {
            data.recommenList = res.data.data.records
          })
        }
      }
      window.onscroll = function() {
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;
        if (data.recommenList.length < 60) {} else {
          data.moer = true
        }
        if (scrollTop + clientHeight >= scrollHeight) {
          getReadList().then(res => {
            if (data.recommenList.length < 60) {
              data.recommenList = [...data.recommenList, ...res.data.data.records]
            }
          })
        }
      }
      onPageScroll((e) => {
        data.scrollTop = e.scrollTop
      })
      return {
        ...toRefs(data),
        getList
      }
    }
  }
</script>

<style lang="scss">
  .scroll-Y {
    height: 300rpx;
  }

  .scroll-view_H {
    white-space: nowrap;
    background-color: #fff;
    border-bottom: 1rpx solid #ccc;
    width: 100%;
    z-index: 9999;
    position: fixed;
    top: 87rpx;
  }

  scroll-view ::-webkit-scrollbar {
    //下面四个属性，选一个就可
    display: none;
    width: 0;
    height: 0;
    background-color: transparent;
  }

  .scroll-view-item {
    font-size: 36rpx;
  }

  .scroll-view-item_H {
    display: inline-block;
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    width: 20%;
    margin: 0 35rpx;
    font-size: 36rpx;
  }

  .article-list {
    margin-top: 80rpx;
  }

  .course-item {
    display: flex;
    justify-content: space-around;
    // flex-direction: column;
    width: 100%;
    padding: 20rpx 0;
    border-bottom: 1rpx solid #f1f1f1;

    .item-right {
      width: 30%;
      height: 160rpx;
      margin-right: 20rpx;
      margin-top: 30rpx;

      .course-img {
        width: 200rpx;
        height: 160rpx;
        border-radius: 10rpx;
      }
    }

    .item-left {
      width: 70%;
      height: 240rpx;
      padding: 20rpx 25rpx;
      box-sizing: border-box;

      .title {
        font-size: 40rpx;
        font-weight: 700;
      }

      .desc {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #d7d7d7;
        font-size: 26rpx;
      }

      .info {
        display: flex;
        margin-top: 20rpx;
        height: 40rpx;
        line-height: 40rpx;

        .name {
          font-size: 30rpx;
        }

        .time,
        .good {
          font-size: 26rpx;
          margin-left: 10rpx;
        }
      }
    }
  }
</style>
