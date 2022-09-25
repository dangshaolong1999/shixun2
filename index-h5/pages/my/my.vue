<template>
  <view class="login-wrapper">
    <view class="login">
      <image src="../../static/images/logo-black_03.jpg" mode=""></image>
      <view class="title">
        <span>请登录</span>
      </view>
      <view class="go iconfont icon-right"></view>
    </view>
  </view>
  <view class="my-box">
    <ul>
      <li>
        <image src="../../static/images/订单.png" mode=""></image>
        <view class="title">我的订单</view>
        <view class="go iconfont icon-right"></view>
      </li>
      <li>
        <image src="../../static/images/余额.png" mode=""></image>
        <view class="title">我的余额</view>
        <view class="go iconfont icon-right"></view>
      </li>
      <li>
        <image src="../../static/images/学习.png" mode=""></image>
        <view class="title">我的学习</view>
        <view class="go iconfont icon-right"></view>
      </li>
      <view class="aa"></view>
      <li>
        <image src="../../static/images/设置.png" mode=""></image>
        <view class="title">设置</view>
        <view class="goo iconfont icon-right"></view>
      </li>
      <li>
        <image src="../../static/images/喇叭.png" mode=""></image>
        <view class="title">意见反馈</view>
        <view class="go iconfont icon-right"></view>
      </li>
      <view class="aa"></view>
      <li>
        <image src="../../static/images/关于我们.png" mode=""></image>
        <view class="title">关于我们</view>
        <view class="go iconfont icon-right"></view>
      </li>
    </ul>
  </view>
</template>

<script>
</script>

<style lang="scss">
  .login-wrapper {
    background-color: #345DC2;
  }

  .login {
    width: 100%;
    height: 250rpx;
    border-bottom: 10rpx solid #f8f9fb;
    border-radius: 40rpx 40rpx 0 0;
    display: flex;
    background-color: #fff;

    image {
      width: 20%;
      height: 150rpx;
      margin-top: 40rpx;
      margin-left: 30rpx;
    }

    .title {
      margin-top: 80rpx;

      span {
        font-weight: 800;
        font-size: 40rpx;
        margin-left: 30rpx;
      }
    }

    .go {
      color: #ccc;
      font-size: 40rpx;
      font-weight: 700;
      margin-top: 80rpx;
      margin-left: 330rpx;
    }


  }

  .my-box {
    ul {
      width: 100%;
      list-style: none;
    }

    li {
      display: flex;
      height: 120rpx;
      border-bottom: 1rpx solid #ccc;

      image {
        width: 10%;
        height: 80rpx;
        margin-top: 20rpx;
        margin-left: 30rpx;
      }

      .title {
        margin-top: 40rpx;
        margin-left: 30rpx;
      }

      .go {
        color: #ccc;
        font-size: 40rpx;
        font-weight: 700;
        margin-top: 40rpx;
        margin-left: 400rpx;
      }

      .goo {
        color: #ccc;
        font-size: 40rpx;
        font-weight: 700;
        margin-top: 40rpx;
        margin-left: 460rpx;
      }
    }

    .aa {
      width: 100%;
      height: 20rpx;
      background-color: #f8f9fb;
    }


  }
</style>
