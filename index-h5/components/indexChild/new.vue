<template>
  <view class="new-box">
    <view class="header-box">
      <view class="new-title">
        <span>近期上新</span>
      </view>
      <view class="right">全部></view>
    </view>
    <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
      <view id="demo1" class="scroll-view-item_H uni-bg-red" v-for="item in new" :key="item.id">
        <view class="course-item">
          <view class="item-left">
            <image class="course-img" :src="item.mainImage" mode=""></image>
            <view class="course-time">{{ item.totalTime }}</view>
          </view>
          <view class="item-right">
            <view class="title">{{ item.title }}</view>
            <view class="info">
              <view class="nickname iconfont icon-laoshi2">{{ item.nickName }}</view>
              <view class="count">
                <view v-if="item.isFree == 0" class="money">免费</view>
                <view v-else class="money iconfont icon-moneybag">{{ item.priceOriginal || item.priceDiscount }}</view>
                <view class="iconfont icon-video">{{ item.commTotal }}人在学</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    props: ['new'],
  }
</script>

<style lang="scss">
  .new-box {
    .scroll-Y {
      height: 300rpx;
    }

    .scroll-view_H {
      white-space: nowrap;
      width: 100%;
    }

    .scroll-view-item {
      height: 300rpx;
      font-size: 36rpx;
    }

    .scroll-view-item_H {
      display: inline-block;
      width: 35%;
      margin: 0 35rpx;
      height: 300rpx;
      font-size: 36rpx;
    }

    .header-box {
      width: 100%;
      height: 100rpx;
      line-height: 100rpx;
      display: flex;
      justify-content: space-between;

      .new-title {
        margin-left: 20rpx;

        span {
          font-size: 35rpx;
          font-weight: 500;
          color: #303133;
        }

        .font {
          float: right;
        }
      }

      .right {
        margin-right: 40rpx;
        font-size: 18rpx;
        color: #959da5;
      }
    }

    .course-item {
      width: 100%;
      border-bottom: 1rpx solid #f1f1f1;

      .item-left {
        position: relative;
        width: 290rpx;
        height: 160rpx;
        margin-right: 20rpx;

        .course-img {
          width: 290rpx;
          height: 160rpx;
          border-radius: 10rpx;
        }

        .course-time {
          position: absolute;
          background-color: rgba(51, 51, 51, 0.4);
          color: #ffffff;
          font-size: 22rpx;
          border-radius: 20rpx;
          bottom: 5rpx;
          right: 5rpx;
          padding: 0 6rpx;
        }
      }

      .item-right {
        height: 160rpx;
        padding-top: 5rpx;
        padding-left: 5rpx;

        .title {
          max-width: 365rpx;
          height: 70rpx;
          line-height: 35rpx;
          font-weight: bold;
          font-size: 28rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          white-space: normal;
        }

        .info {
          margin-top: 20rpx;

          .nickname {
            font-size: 23rpx;
            color: #999;
          }

          .count {
            display: flex;
            align-items: center;

            .iconfont {
              font-size: 23rpx;
              color: #222222;
            }

            .money {
              width: 130rpx;
              color: $mxg-color-orange;
              font-size: 28rpx;
              padding-right: 30rpx;
              align-self: flex-end;
            }
          }
        }
      }
    }
  }
</style>
