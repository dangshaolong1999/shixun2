<template>
	<view class="header">
		<view>
			<text>张山</text>
			<text>020-811678888</text>
		</view>
		<view class="">
			广东省广州市海珠区新港中路397号
		</view>
	</view>
	
	<view class="go">
		购物车
	</view>
	<!-- 购物车 -->
	<view v-if="list.length != 0">
	<view class="content" v-for="item,index in list" :key="item.goods_id">
		<u-checkbox-group @change="checkboxGroupChange">
			<u-checkbox @change="checkboxChange1" v-model="item.checked"></u-checkbox>
		</u-checkbox-group>
		<view>
			<image :src="item.goods_big_logo"></image>
		</view>
		<view>
			<view><text>{{item.goods_name}}</text></view>
			<view>
				<text>￥{{item.goods_price}}</text>
				<u-number-box v-model="item.num" @change="valChange(item.num,index)"></u-number-box>
			</view>
		</view>
	</view>
	</view>
	<!-- 购物车空 -->
	<view class="" v-else>
		<image src="http://hbimg.b0.upaiyun.com/e1b1467beea0a9c7d6a56b32bac6d7e5dcd914f7c3e6-YTwUd6_fw658" mode=""></image>
	</view>

	<!-- 底部 -->
	<view class="footer">
		<view class="flex">
			<u-checkbox @change="checkboxChange" v-model="checked">全选</u-checkbox>
			<view>
				<view>合计：<text>￥{{a.Total}}</text></view>
				<view>包含运费</view>
			</view>
			<u-button type="error">结算({{a.num}})</u-button>
		</view>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs,
		computed
	} from 'vue'
	import {onShow} from '@dcloudio/uni-app'
	export default {
		setup() {
			const data = reactive({
				value: true,
				checked: false,
				list: [],
			})
			onShow(() => {
				console.log(666);
				data.list = uni.getStorageSync('info') || [];
			})
			
			console.log(data.list.length,66666);
			const valChange = (item, i) => {
				console.log(item, i);
				if (item < 1) {
					uni.showModal({
						title: '提示',
						content: '你是否要删除',
						success: function(res) {
							if (res.confirm) {
								data.list.splice(i, 1)
							} else if (res.cancel) {
								console.log('用户点击取消');
								data.list[i].num = 1
							}
						}
					});
				}
				uni.setStorage({
					key: 'info',
					data: data.list,
				});
			}
			const checkboxChange = (e) => {
				data.list.forEach(item => {
					item.checked = e.value
				})
			}
			const checkboxChange1 = (e) => {
				console.log(111);
				setTimeout(() => {
					let a = data.list.every(item => item.checked == true)
					if (a) {
						data.checked = true
					} else {
						data.checked = false
					}
				})

				// if()

			}
			const checkboxGroupChange = (e) => {
				// console.log(e);
			}
			// 计算
			const a = computed(() => {
				let num = 0
				let Total = 0
				data.list.forEach(item => {
					if (item.checked) {
						num += item.num
						Total += item.num * item.goods_price
					}

				})
				return {
					num,
					Total
				}
			})
			return {
				...toRefs(data),
				valChange,
				checkboxChange,
				checkboxChange1,
				checkboxGroupChange,
				a
			}
		}
	}
</script>

<style lang="scss">
	.footer {
		position: fixed;
		background-color: #fff;
		bottom: 0;
		width: 100%;
		border-top: 1px solid #ccc;
		padding: 0 0 0 20rpx;

		.flex {
			display: flex;
			height: 100rpx;
			align-items: center;

			u-checkbox {
				flex: 1;
			}

			view {
				margin-right: 10rpx;

				view:nth-child(1) {
					text {
						color: red;
						font-size: 36rpx;
						font-weight: 500;
					}
				}

				view:nth-child(2) {
					float: right;
				}
			}

			.u-button {}
		}

	}

	.content {
		display: flex;
		align-items: center;
		padding: 20rpx;
		border-bottom: 1px solid #ccc;

		.u-checkbox {
			flex: 1;
		}

		view:nth-child(2) {
			// width: 142rpx;
			// height: 142rpx;
			margin: 0 20rpx;

			image {
				width: 142rpx;
				height: 142rpx;
			}
		}

		view:nth-child(3) {
			flex: 3;

			view:nth-child(1) {
				text {
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden; //溢出内容隐藏
					text-overflow: ellipsis; //文本溢出部分用省略号表示
					display: -webkit-box; //特别显示模式
					-webkit-line-clamp: 2; //行数
					line-clamp: 2;
					-webkit-box-orient: vertical; //盒子中内容竖直排列
				}

			}

			view:nth-child(2) {
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin: 0;
				padding: 0;
				margin-top: 20rpx;

				text {
					color: red;
					margin: 0;
					padding: 0;
				}
			}
		}
	}

	.go {
		margin-top: 5rpx;
		border: 1rpx solid;
		border-color: red transparent;
		color: red;
		padding: 20rpx;
		font-size: 36rpx;
	}

	.header {
		padding: 20rpx;
		font-size: 30rpx;
		color: #000;

		view:nth-child(1) {
			display: flex;
			justify-content: space-between;
		}
	}

	view {
		margin: 0;
		padding: 0;
	}
</style>
