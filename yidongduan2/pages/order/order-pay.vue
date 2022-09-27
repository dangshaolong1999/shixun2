<template>
	<view>
		<view class="header">
			<img src="../../static/左箭头.png" @click="$router.go(-1)">
			<h4>订单支付</h4>
		</view>
		<view class="a">
			<p>支付方式</p>
			<p><span><img src="../../static/static/pay/alipay.png" alt="">支付宝</span><input type="radio" name="1"></p>
			<p><span><img src="../../static/static/pay/wxpay.png" alt="">微信</span><input type="radio" name="1"></p>
		</view>
		<view class="a">
			<p>
				<span>实付金额</span>
				<span>￥{{}}</span>
			</p>
		</view>
		<button @click="b" v-if="!a">立即支付</button>
		<button class="bot" v-if="a" @click="b">立即支付</button>
	</view>
</template>

<script>
	import {ref} from 'vue'
	export default {
		setup() {
			const a = ref(false)
			const b = (el) => {
				a.value = true
			}
			return {
				b,a
			}
		}
	}
</script>

<style lang="scss">
	button{
		background-color: #345dc2;
		color: #fff;
		width: 90%;
		margin: 30rpx auto;
	}
	.bot{
		background-color: #777;
	}
	.a{
		width: 90%;
		margin: 20rpx auto;
		border: 1px solid rgba(204, 204, 204, 0.3);
		border-radius: 10rpx;
		p{
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			border-bottom: 1px solid rgba(204, 204, 204, 0.3);
			img{
				width: 60rpx;
				height: 60rpx;
				vertical-align: middle;
				margin-right: 20rpx;
			}
			span:nth-child(2){
				color: red;
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
	*{
		margin: 0;
		padding: 0;
	}
</style>
