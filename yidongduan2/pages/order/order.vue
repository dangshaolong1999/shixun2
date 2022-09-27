<template>
	<view class="header">
		<img src="../../static/左箭头.png" @click="$router.go(-1)">
		<h4>我的订单</h4>
	</view>
	<view class="content" v-for="obj in list" :key="obj.id">
		<p><span>{{obj.updateDate}}</span> <span>订单号：{{obj.orderId}}</span></p>
		<view class="box" v-for="item in obj.courseList" :key="obj.id">
			<view class="img">
				<img :src="item.mainImage.slice(-3)=='jpg'?`../../../static/${item.mainImage}` :item.mainImage">
			</view>
			<view class="left">
				<h5>{{item.title}}</h5>
				<p><img src="../../static/我的-我的.png" alt="">{{item.nickName}}</p>
				<p><span><img src="../../static/钱袋.png" alt="">{{item.isFree==1?'免费':item.priceDiscount}}</span>
					<span><img src="../../static/运行.png"> {{item.studyTotal}}
						人在学</span>
				</p>
			</view>
		</view>
		<view class="a">
			<p><span>实付：</span><span>￥{{obj.priceDiscount}}</span></p>
			<view class="a1" v-if="obj.status==1">
				<span>待支付</span>
				<span>
					<button @click="qx">取消订单</button>
					<button @click="$router.push('/pages/order/order-pay')">立即支付</button>
				</span>
			</view>
			<view class="a2" v-if="obj.status==2">
				<span>交易成功</span>
			</view>
			<view class="a3" v-if="obj.status==3" >
				<span>交易关闭</span>
				<button @click="qx">删除订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		pay
	} from '../../api/api.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				list: []
			})
			pay().then(res => {
				console.log(res.data);
				data.list = res.data
			})
			const qx = () => {
				pay().then(res => {
					console.log(res.data);
					data.list = res.data
				})
			}
			return {
				...toRefs(data),
				qx
			}
		}
	}
</script>

<style lang="scss">
	.a{
		width: 94%;
		margin: 0 auto;
		p{
			display: flex;
			margin-bottom: 20rpx;
			align-items:center;
			justify-content: flex-end;
			span:nth-child(2){
				color: red;
				font-size: 34rpx;
			}
		}
		.a2{
			color: #777;
			font-size: 28rpx;
		}
		.a3{
			display: flex;
			color: #777;
			font-size: 28rpx;
			justify-content: space-between;
			align-items: center;
			button{
				width: 140rpx;
				height: 50rpx;
				line-height: 50rpx;
				font-size: 24rpx;
			}
		}
		.a1{
			display: flex;
			justify-content: space-between;
			span:nth-child(1){
				color: red;
				font-size: 28rpx;
			}
			span:nth-child(2){
				display: flex;
				button:nth-child(1){
					width: 140rpx;
					height: 50rpx;
					line-height: 50rpx;
					font-size: 24rpx;
					
				}
				button:nth-child(2){
					width: 140rpx;
					height: 50rpx;
					line-height: 50rpx;
					font-size: 24rpx;
					background-color: red;
					color: #fff;
					margin-left: 20rpx;
				}
			}
		}
	}
	.box {
		width: 94%;
		margin: 10rpx auto;
		display: flex;

		.img {
			width: 40%;
			margin-right: 10rpx;

			img {
				width: 100%;
				height: 152rpx;
				border-radius: 10rpx;
			}
		}

		.left {
			width: 60%;

			h5 {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 100%;
			}

			p {
				margin-top: 10rpx;
				font-size: 24rpx;

				img {
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
				}

				span:nth-child(1) {
					color: #ff9800;
					margin-right: 20rpx;
				}
			}
		}
	}

	.content {
		width: 94%;
		margin: 20rpx auto;

		p {
			color: #777;
			font-size: 24rpx;

			span {
				margin-left: 20rpx;
			}
		}
	}

	.header {
		display: grid;
		height: 100rpx;
		align-items: center;
		padding: 0 20rpx;
		border-bottom: 2rpx solid rgba(119, 119, 119, 0.1);
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

	* {
		margin: 0;
		padding: 0;
	}
</style>
