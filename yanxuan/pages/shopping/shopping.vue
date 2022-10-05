<template>
  <view>
    <u-card :border="false">
      <view class="" slot="body">
        <view class="u-body-item u-border-bottom u-col-between u-p-t-0">
          <view class="checkbox">
            <u-checkbox></u-checkbox>
          </view>
          <image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg"
            mode="aspectFill"></image>
          <view class="u-body-item-title u-line-2">
            <view class="title">
              瓶身描绘的牡丹一如你初妆
            </view>
            <view class="desc">
              瓶身描绘的牡丹一如你初妆
            </view>
            <view class="num">
              <view class="price">
                ￥10
              </view>
              <u-number-box style="margin-left: 120rpx;"></u-number-box>
            </view>
          </view>
        </view>
      </view>
    </u-card>
  </view>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .u-card-wrap {
    background-color: $u-bg-color;
    // padding: 1px;
  }

  .u-body-item {
    font-size: 32rpx;
    color: #333;
    display: flex;
    height: 170rpx;
    line-height: 50rpx;

    .checkbox {
      margin-top: 30rpx;
    }

    .u-body-item-title {
      margin-left: 60rpx;

      .num {
        display: flex;
        // margin-left: 170rpx;
        margin-top: 10rpx;
      }
    }
  }

  .u-body-item image {
    width: 120rpx;
    flex: 0 0 120rpx;
    height: 120rpx;
    border-radius: 8rpx;
    margin-left: 12rpx;
  }
</style>
