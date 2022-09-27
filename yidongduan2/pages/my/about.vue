<template>
	<view class="bgc">
		<view class="header">
			<img src="../../static/左箭头.png" @click="$router.go(-1)">
			<h4>关于梦学谷</h4>
		</view>
		<view class="content">
			<img src="../../static/static/images/logo-black.png"><br>
			<a href="###">Version 1.0.0</a>
		</view>
		<view class="botton">
			<p>
				梦学谷是专注于在线教育平台，聚合了优秀教师
				的海量精品课程。在这里，
				您可以在线观看视频教
				程：您可以随时随地向名师请教；您可以与大量志同
				道合的同学进行交流。
			</p>
			<p>
				打破地域的限制，让每个立志学习，有梦想的
				人，都能接受优秀教币的指导和教学；同时希望给优
				秀的教师-个展示的平台。
			</p>
			<p>
				梦学谷————
				陪你学习，伴你梦想！
			</p>
		</view>
		<view class="f">
			Copyright @2022 mengu.com All rights reserved
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
	.f{
		position: fixed;
		bottom: 40rpx;
		width: 100%;
		text-align: center;
		font-size: 24rpx;
		color: #777;
	}
	.botton{
		width: 90%;
		margin: 0 auto;
		text-indent: 2em;
		p{
			margin: 20rpx 0;
		}
	}
	.content {
		text-align: center;
		margin: 40rpx 0;
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

	a {
		text-decoration: none;
	}
</style>
