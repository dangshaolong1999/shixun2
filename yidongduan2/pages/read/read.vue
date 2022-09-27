<template>
	<view>
		<myinput :clock="clock"></myinput>
		<Back :scrollTop="scrollTop"></Back>
		<view class="top">
			<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="0">
				<view @click="highlight(-1)" class="scroll-view-item_H uni-bg-red" :class="{bor:id==-1}"><span></span>
					推荐</view>
				<view @click="highlight(item.id)" class="scroll-view-item_H uni-bg-red" :class="{bor:id==item.id}"
					v-for="item in list" :key="item.id"><span></span>{{item.name}}</view>
			</scroll-view>
		</view>
		<view class="content">
			<view class="article-item" v-for="item in datalist" :key="item.id" @click="details(item.id)">
				<view class="left">
					<view class="fir-text">
						{{item.title}}
					</view>
					<view class="sec-text">
						{{item.summary}}
					</view>
					<view class="bottom-text">
						<view class="name">
							{{item.nickName}}.
						</view>
						<view class="">
							{{item.updateDate}} · {{item.thumhup}}赞
						</view>
					</view>
				</view>
				<view class="right" v-if="item.imageUrl !=null">
					<!-- <img src="../../static/static/images/banner1.jpg" alt=""> -->
					<img :src="item.imageUrl.slice(0,5)=='https'? item.imageUrl:`../../static/${item.imageUrl}`">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		swiper,
		list1
	} from '../../api/api.js';
	import { onPageScroll } from '@dcloudio/uni-app'
	import Back from '../../components/components/Back-top/Back-top.vue'
	import myinput from '@/components/components/head-search/head-search.vue'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		components: {
			myinput,
			Back
		},
		setup() {
			const data = reactive({
				clock: '#345dc2',
				list: [],
				id: -1,
				datalist:[],
				scrollTop:0,
			})
			swiper().then(res => {
				console.log(res.data);
				data.list = res.data
			})
			const highlight = (i) => {
				data.id = i
				list1({categoryId: i, current: 1, size: 10}).then(res => {
					console.log(res.data.records,123123);
					data.datalist = res.data.records
				})
			}
			list1({
				current: 1,
				size: 10
			}).then(res => {
				console.log(res.data.records,123123);
				data.datalist = res.data.records
			})
			onPageScroll((e) => {
				data.scrollTop = e.scrollTop
			})
			window.onscroll = function(){
				let clientHeight = document.documentElement.clientHeight;
				let scrollHeight = document.body.scrollHeight;
				let scrollTop = document.documentElement.scrollTop;
				if(data.datalist.length < 60){
					
				}else{
					data.moer=true
				}
				if (scrollTop + clientHeight>= scrollHeight){
					list1({
				current: 1,
				size: 10
			}).then(res => {
						if(data.datalist.length < 60 ){
							data.datalist=[...data.datalist, ...res.data.records]
						}
					})
				}
			}
			onPageScroll((e) => {
				data.scrollTop = e.scrollTop
			})
			const details = (i) => {
				console.log(i);
				uni.setStorage({
					key: "id",
					data:i
				})
				uni.navigateTo({
					url: '/pages/read/details'
				});
			}
			return {
				...toRefs(data),
				highlight,
				details
			}
		}
	}
</script>

<style lang="scss">
	.content{
		margin-top: 180rpx;
	}
	.article-item {
		width: 100%;
		display: flex;
		border-bottom: 1px solid #eee;
		padding: 3%;
		box-sizing: border-box;

		.left {
			// flex: 1;
			width: 70%;

			.fir-text {
				font-weight: 700;
			}

			.sec-text {
				font-size: 25rpx;
				color: #7e7e7e;
				margin: 2% 0 4% 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.bottom-text {
				width: 100%;
				display: flex;
				font-size: 25rpx;
				color: #7e7e7e;

				.name {
					color: black;
				}
			}
		}

		.right {
			// width: 30%;
			flex: 1;
			margin-left: 2%;

			img {
				width: 100%;
				height: 80%;
				border-radius: 6%;

			}
		}
	}

	.bor {
		position: relative;
		color: #345dc2;

		span {
			position: absolute;
			display: inline-block;
			width: 60rpx;
			height: 60rpx;
			border-bottom: 5rpx solid #345dc2;
			bottom: 0;
			right: calc(50% - 30rpx);
		}
	}

	.top {
		background-color: #fff;
		position: fixed;
		top: 100rpx;
		width: 100%;
		display: flex;
		border-bottom: 1px solid rgba(204, 204, 204, 0.432);

		view {
			width: 20%;
		}
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		text-align: center;
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 20%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 36rpx;
	}

	scroll-view ::-webkit-scrollbar {
		/* 下面四个属性，选一个就可 */
		display: none;
		width: 0;
		height: 0;
		background-color: transparent;
	}
</style>
