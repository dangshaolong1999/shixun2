<template>
	<view class="box">
		<view class="header1" v-if="list.avatarUrl">
			<image :src="list.avatarUrl" mode=""></image>
			<view class="">
				<image :src="list.avatarUrl"></image>
				<text>{{list.nickName}}</text>
			</view>
		</view>
		<view class="header" v-else>
			<navigator url="/pages/login/login">登录</navigator>
		</view>

		<!-- 收藏 -->
		<view class="collection a">
			<view>
				<view>0</view>
				<view>收藏的店铺</view>
			</view>
			<view>
				<view>0</view>
				<view>收藏的商品</view>
			</view>
			<view>
				<view>0</view>
				<view>关注的商品</view>
			</view>
			<view>
				<view>0</view>
				<view>我的足迹</view>
			</view>
		</view>
		<!-- 收藏 -->
		<!-- 我的订单 -->
		<view class="order a">
			<view class="my">我的订单</view>
			<view class="flex">
				<view>
					<view class="iconfont icon-ding_dan"></view>
					<view>全部订单</view>
				</view>
				<view>
					<view class="iconfont icon-fukuantongzhi"></view>
					<view>待付款</view>
				</view>
				<view>
					<view class="iconfont icon-receipt-address"></view>
					<view>待收货</view>
				</view>
				<view>
					<view class="iconfont icon-tuihuotuikuan_dianpu"></view>
					<view>退款/退货</view>
				</view>
			</view>
		</view>
		<!-- 我的订单 -->
		<!-- 收货地址 -->
		<view class="address a">收货地址管理</view>
		<!-- 收货地址 -->
		<!-- 联系客服 -->
		<view class="service a">
			<view>
				<text>联系客服</text>
				<text>400-618-4000</text>
			</view>
			<view>意见反馈</view>
			<view>关于我们</view>
		</view>
		<!-- 联系客服 -->
		<!-- 把应用推荐给其他人 -->
		<view class="share a">
			把应用推荐给其他人
		</view>
		<!-- 把应用推荐给其他人 -->
	</view>

</template>

<script>
	import {
		onShow
	} from '@dcloudio/uni-app'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				list: {}
			})
			onShow(() => {
				data.list = uni.getStorageSync('userInfo') || {}
			})
			console.log(data.list);
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.share{
		padding: 15rpx;
		background-color: #fff;
	}
	.service{
		background-color: #fff;
		view:nth-child(1){
			display: flex;
			justify-content: space-between;
		}
		view{
			padding: 15rpx;
			border-bottom: 1px solid #ccc;
		}
	}
	.address{
		background-color: #fff;
		padding: 15rpx;
	}
	.order {
		background-color: #fff;

		.my {
			border-bottom: 1px solid #ccc;
			padding: 15rpx;
		}

		.flex {
			display: flex;
			justify-content: space-around;
			text-align: center;
			padding: 15rpx;
			view{
				view:nth-child(1){
					color: red;
				}
				
			}
		}

	}

	.collection {
		background-color: #fff;
		margin-bottom: 50rpx;
		display: flex;
		justify-content: space-around;
		padding: 10rpx;
		text-align: center;
		margin-top: 50rpx;
		height: 90rpx;
		position: relative;
		z-index: 1;

		view {
			view:nth-child(1) {
				color: red;
			}
		}
	}

	.a {
		width: 90%;
		margin: 30rpx auto;
	}

	.header1 {
		width: 100%;
		height: 500rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
		margin-bottom: -75rpx;

		image {
			width: 100%;
		}

		view {
			width: 130rpx;
			height: 200rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;

			image {
				width: 130rpx;
				height: 130rpx;
				border-radius: 50%;
				margin-bottom: 20rpx;
			}
		}
	}

	.box {
		background-color: rgba(199,199,199,.3);
		width: 100%;
		min-height: 120vh;
	}

	.header {
		margin-bottom: -75rpx;
		width: 100%;
		height: 500rpx;
		background-color: #eb4450;
		display: flex;
		justify-content: center;
		align-items: center;

		navigator {
			color: #b3ea31;
			width: 115rpx;
			height: 90rpx;
			background-color: transparent;
			border: 1px solid #b3ea31;
			border-radius: 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 34rpx;
		}
	}
</style>
