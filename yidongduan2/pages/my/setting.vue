<template>
	<view class="bgc">
		<view class="header">
			<img src="../../static/左箭头.png" @click="$router.go(-1)">
			<h4>设置</h4>
		</view>
		<view class="content">
			<view>
				<span>允许非WIFI网络播放</span>
				<switch name="switch" />
			</view>
			<view>
				<span>允许非WIFI网络缓存</span>
				<switch name="switch" />
			</view>
			<view>
				<span>视频自动连续播放</span>
				<switch name="switch" />
			</view>
			<view>
				<span>清除应用缓存</span>
				<span>1kb</span>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		padding: 0 auto;
		background-color: #fff;
		view{
			display: flex;
			justify-content: space-between;
			padding: 26rpx;
			background-color: #fff;
			border-bottom: 1px solid rgba(204, 204, 204, 0.3);
		}
		view:nth-child(4){
			border-top: 20rpx solid rgba(119, 119, 119, 0.1);
		}
	}
	.bgc {
		background-color: rgba(119, 119, 119, 0.1);
		height: 100vh;
	}

	.header {
		display: grid;
		height: 100rpx;
		align-items: center;
		padding: 0 20rpx;
		border-bottom: 20rpx solid rgba(119, 119, 119, 0.1);
		background-color: #fff;

		img {
			grid-area: 1/1/1/1;
			width: 40rpx;
			height: 40rpx;
		}

		h4 {
			grid-area: 1/1/1/1;
			text-align: center;
		}
	}
</style>
