<template>
	<view>
		<view class="header">
			<span @click="$router.go(-1)"></span>
			<h4>我的余额</h4>
		</view>
		<view class="a">
			<view class="a1">
				<span>余额：</span>
				<p>{{a}}币</p>
			</view>
		</view>
		<view class="b">
			<p>充值:</p>
			<ul>
				<li @click="b(1)" :class="{c:c==1}">
					<p>0币</p>
					<p>￥ 0</p>
				</li>
				<li @click="b(2)" :class="{c:c==2}">
					<p>30币</p>
					<p>￥ 30</p>
				</li>
				<li @click="b(3)" :class="{c:c==3}">
					<p>60币</p>
					<p>￥ 60</p>
				</li>
				<li @click="b(4)" :class="{c:c==4}">
					<p>90币</p>
					<p>￥ 90</p>
				</li>
				<li @click="b(5)" :class="{c:c==5}">
					<p>120币</p>
					<p>￥ 120</p>
				</li>
				<li @click="b(6)" :class="{c:c==6}">
					<p>150币</p>
					<p>￥ 150</p>
				</li>
			</ul>
		</view>
		<view class="text">
			<p>充值说明:</p>
			<p>1.在los设备的App要进行充值后，使用虚拟币消费</p>
			<p>2.从之后不能在IOS设备上使用，安卓版和网站余额不通用。</p>
			<p>3.充值后没有使用期限，但不可提现、退换、转让和申请发票。</p>
			<p>4.如遇无法充值、充值失败等问题，可关注[学梦古]公众号，联系我们解决</p>
		</view>
		<button>立即充值</button>
	</view>
</template>

<script>
	import {balance} from '../../api/api.js'
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data = reactive({
				c:1,
				a:''
			})
			const b = (i) => {
				data.c = i
			}
			balance().then(res => {
				console.log(res.data);
				data.a = res.data
			})
			return {
				...toRefs(data),
				b
			}
		}
	}
</script>

<style lang="scss">
	.c{
		border: 1px solid red !important;
	}
	button{
		width: 90%;
		color: #fff;
		border-radius: 50rpx;
		background-color: #345dc2;
		margin:  60rpx auto;
	}
	.text{
		width: 90%;
		margin: 0 auto;
		p:nth-child(1){
			font-size: 40rpx;
			margin-bottom: 20rpx;
		}
		p{
			color: #777;
			font-size: 28rpx;
		}
	}
	.b{
		width: 90%;
		margin: 20rpx auto;
		p{
			color: #777;
		}
		ul{
			display: flex;
			flex-wrap: wrap;
			list-style: none;
			justify-content: space-around;
			margin: 20rpx 0;
			li{
				width: 26%;
				text-align: center;
				margin-bottom: 20rpx;
				border: 1px solid rgba(119, 119, 119, 0.1);
				border-radius: 10rpx;
				padding: 10rpx;
				p:nth-child(1){
					color: red;
					font-size: 38rpx;
				}
				p:nth-child(2){
					font-size: 30rpx;
				}
			}
		}
	}
	.a {
		width: 100%;
		height: 288rpx;
		background-color: #345dc2;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		flex-wrap: wrap;

		.a1 {
			text-align: center;
		}

		span {
			flex: 1;
		}

		p {
			margin-top: 10rpx;
			font-size: 80rpx;
		}
	}

	.header {
		display: grid;
		height: 100rpx;
		align-items: center;
		padding: 0 20rpx;
		border-bottom: 3rpx solid rgba(119, 119, 119, 0.1);
		background-color: #345dc2;
		color: #fff;

		span {
			grid-area: 1/1/1/1;
			width: 20rpx;
			height: 20rpx;
			border: 1px solid red;
			margin-left: 20rpx;
			border-color: transparent transparent #fff #fff;
			transform: rotate(45deg);
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
