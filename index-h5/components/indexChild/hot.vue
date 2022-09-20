<template>
  <div class="hot-box">
    <div class="header">
      <div class="left-box">
        <span>热门推荐</span>
        <div></div>
      </div>
      <div class="right-box">
        <span>全部 ></span>
      </div>
    </div>
    <div class="list">
      <div class="list-item" v-for="item in hot" :key="item.id">
        <div class="img-box">
          <image :src="item.userImage" mode=""></image>
        </div>
        <div class="right-box">
          <div class="title"></div>
          <div class="name"></div>
          <div class="price">
            <span></span>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['hot']
  }
</script>

<style lang="scss">
  .hot-box {
    margin-top: 30rpx;

    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .left-box {
        margin-left: 70rpx;

        span {
          font-size: 35rpx;
        }
      }

      .right-box {
        margin-right: 30rpx;

        span {
          color: #959da5;
          font-size: 14rpx;
        }
      }
    }
  }
</style>
