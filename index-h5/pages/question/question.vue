<template>
  <view class="article-box">
    <view class="header">
      <view class="item" @click="getList(item.id)" v-for="item in headerList" :key="item.id">{{ item.name }}</view>
    </view>
    <view class="article-list">
      <view class="course-item" v-for="item in questionList" :key="item.id">
        <view class="title">{{ item.title }}</view>
        <view class="info">
          <view class="left">
            <span class="answer">{{ item.reply }}个回答</span>
            <span class="browse">{{ item.viewCount }}个浏览</span>
          </view>
          <view class="right">
            <span class="name">{{ item.nickName }}</span>
            <span class="time">{{ item.updateDate }}</span>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    getHotanswer,
    getLatest,
    getWaitanswer
  } from '@/api/index.js'
  import {
    onPageScroll
  } from '@dcloudio/uni-app'
  import {
    reactive,
    toRefs
  } from "vue";
  export default {
    setup() {
      let data = reactive({
        /** 头部数据 */
        headerList: [{
            id: 1,
            name: '热门回答'
          },
          {
            id: 2,
            name: '最新问题'
          },
          {
            id: 3,
            name: '等待回答'
          }
        ],
        /** 数据 */
        questionList: []
      })
      getHotanswer({
        size: 10,
        current: 1
      }).then(res => {
        data.questionList = res.data.data.records
      })
      const getList = (id) => {
        if (id === 1) {
          getHotanswer({
            size: 10,
            current: 1
          }).then(res => {
            data.questionList = res.data.data.records
          })
        } else if (id === 2) {
          getLatest({
            size: 10,
            current: 1
          }).then(res => {
            data.questionList = res.data.data.records
          })
        } else {
          getWaitanswer({
            size: 10,
            current: 1
          }).then(res => {
            data.questionList = res.data.data.records
          })
        }
      }
      window.onscroll = function() {
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;
        if (data.questionList.length < 60) {} else {
          data.moer = true
        }
        if (scrollTop + clientHeight >= scrollHeight) {
          getReadList().then(res => {
            if (data.questionList.length < 60) {
              data.questionList = [...data.questionList, ...res.data.data.records]
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
  .header {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-bottom: 1rpx solid #ccc;
    z-index: 9999;
    position: fixed;
    top: 87rpx;

    .item {
      width: 33.33%;
      text-align: center;
    }
  }

  .article-list {
    margin-top: 80rpx;
  }

  .course-item {
    width: 100%;
    height: 100rpx;
    padding: 30rpx;
    border-bottom: 1rpx solid #ccc;

    .title {
      font-size: 35rpx;
      font-weight: 700;
    }

    .info {
      width: 80%;
      display: flex;
      font-size: 20rpx;
      justify-content: space-between;
      color: #d7d7d7;

      span {
        margin-left: 10rpx;
      }
    }
  }
</style>
