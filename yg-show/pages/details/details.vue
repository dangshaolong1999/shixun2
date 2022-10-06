<template>
	<view>
		<swiper class="swiper" circular indicator-dots="true" indicator-active-color="#111" indicator-color="#ccc"
			autoplay="true">
			<swiper-item v-for="(item,index) in img" :key="index">
				<view class="swiper-item uni-bg-red">
					<image :src="item.pics_mid" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="price">￥{{list.goods_price}}</view>
		<view class="goods_name_row">
			<view class="goods_name">{{list.goods_name}}{{list.goods_name}}</view>
			<view class="goods_collect" @click="handleCollect">
				<text class="iconfont   {{isCollect?'icon-shoucang1':'icon-shoucang'}} "></text>
				<view class="collect_text">收藏</view>
			</view>
		</view>
		<view class="goods_info">
			<view class="goods_info_title">图文详情</view>
			<view class="goods_info_content">
				<!-- 富文本 -->
				<!-- {{goodsObj.goods_introduce}} -->
				<view v-html="list.goods_introduce"></view>
				<!-- <rich-text nodes="{{list.goods_introduce}}"></rich-text> -->
			</view>
		</view>

		<view class="btm_tool">
			<view class="tool_item">
				<view class="iconfont icon-kefu"></view>
				<view>客服</view>
				<button open-type="contact"></button>
			</view>
			<view class="tool_item">
				<view class="iconfont icon-yixianshi-"></view>
				<view>分享</view>
				<button open-type="share"></button>
			</view>
			<navigator open-type="switchTab" @click="handleCartTiao" url="/pages/cart/index" class="tool_item">
				<view class="iconfont icon-gouwuche"></view>
				<view>购物车</view>
			</navigator>
			<view class="tool_item btn_cart " @click="handleCartAdd">
				加入购物车
			</view>
			<view class="tool_item btn_buy">
				立即购买
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import {
		detail
	} from '../../http/api/api'
	import {
		detailslist,
		Carousel
	} from '../../http/interface'
	import {
		onLoad,onShow
	} from "@dcloudio/uni-app";
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data: {
				id: string,
				img: Carousel,
				list: detailslist,
				isCollect: boolean,
				info: []
			} = reactive({
				id: '0',
				img: [],
				list: {},
				isCollect: false,
				info: []
			})
			onLoad((option) => {
				console.log(option.id);
				data.id = option.id
				detail(data.id).then(res => {
					
					data.img = res.message.pics
					data.list = res.message
					// console.log(data.list.goods_id,1212311);
				})
			});
			const handleCollect = () => {
				data.isCollect = !data.isCollect
			}
			//添加购物车
			const handleCartAdd = () => {
				data.info = uni.getStorageSync('info') || [];
				console.log(data.info);
				let index = data.info.findIndex(item => item.goods_id == data.list.goods_id)
				console.log(index);
				if (index == -1) {
					data.list.num = 1;
					data.list.checked = false;
					data.info.push(data.list)
				} else {
					data.info[index].num++
				}
				uni.setStorage({
					key: 'info',
					data: data.info,
				});
				uni.showToast({
					title: '加入成功',
					icon: 'success'
				});
			}
			const handleCartTiao = () => {
				uni.reLaunch({
					url: '../shopping/shopping'
				});
			}

			return {
				...toRefs(data),
				handleCollect,
				handleCartAdd,
				handleCartTiao
			}
		}
	}
</script>

<style lang="scss">
	.btm_tool {
		border-top: 1rpx solid #ccc;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 90rpx;
		background-color: #fff;
		display: flex;
	}

	.btm_tool .tool_item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 24rpx;
		position: relative;
	}

	.btm_tool .tool_item button {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}

	.btm_tool .btn_cart {
		flex: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #ffa500;
		color: #fff;
		font-size: 30rpx;
		font-weight: 600;
	}

	.btm_tool .btn_buy {
		flex: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #eb4450;
		color: #fff;
		font-size: 30rpx;
		font-weight: 600;
	}

	.goods_name_row {
		border-top: 5rpx solid #dedede;
		border-bottom: 5rpx solid #dedede;
		padding: 10rpx 0;
		display: flex;
	}

	.goods_name_row .goods_name {
		flex: 5;
		color: #000;
		font-size: 30rpx;
		padding: 0 10rpx;
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.goods_name_row .goods_collect {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-left: 1rpx solid #000;
	}

	.goods_name_row .goods_collect .icon-shoucang1 {
		color: orangered;
	}

	.goods_info .goods_info_title {
		font-size: 32rpx;
		color: var(--themeColor);
		font-weight: 600;
		padding: 20rpx;
	}

	.price {
		color: red;
		padding: 10rpx 20rpx;
		// border-bottom: 1px solid #ccc;
		font-weight: 600;
		font-size: 36rpx;
	}

	.swiper {
		height: 65vw;
		text-align: center;
	}

	.swiper image {
		width: 60%;
	}
</style>
