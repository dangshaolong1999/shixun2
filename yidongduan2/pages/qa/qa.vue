<template>
	<view>
		<myinput :clock="clock"></myinput>
		<Back :scrollTop="scrollTop"></Back>
		<view class="top">
				<view @click="highlight(0)" class="scroll-view-item_H uni-bg-red" :class="{bor:id==0}"><span></span>热门回答</view>
				<view @click="highlight(1)" class="scroll-view-item_H uni-bg-red" :class="{bor:id==1}"><span></span>最新问题</view>
				<view @click="highlight(2)" class="scroll-view-item_H uni-bg-red" :class="{bor:id==2}"><span></span>等待回答</view>
		</view>
		<view class="content">
			<view @click="aaaa(item.id)" class="article-item" v-for="item in list" :key="item.id">
				<h4>{{item.title}}</h4>
				<view><span>{{item.reply}}回答.{{item.viewCount}}预览</span><span>{{item.nickName}}.{{item.createDate}}</span></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {hot,wait,new1
	} from '@/api/api.js'
	import {onPageScroll} from '@dcloudio/uni-app'
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
				id:0,
				scrollTop:0,
			})
			const highlight = (i) => {
				data.id = i
				if(i==0){
					hot({current: 1, size: 10}).then(res => {
						data.list = res.data.records
					})
				}else if(i==1){
					new1({current: 1, size: 10}).then(res => {
						data.list = res.data.records
					})
				}else{
					wait({current: 1, size: 10}).then(res => {
						data.list = res.data.records
					})
				}
			}
			hot({current: 1, size: 10}).then(res => {
				console.log(res);
				data.list = res.data.records
			})
			window.onscroll = function(){
				let clientHeight = document.documentElement.clientHeight;
				let scrollHeight = document.body.scrollHeight;
				let scrollTop = document.documentElement.scrollTop;
				if(data.list.length < 60){
					
				}else{
					data.moer=true
				}
				if (scrollTop + clientHeight>= scrollHeight){
					hot({
				current: 1,
				size: 10
			}).then(res => {
						if(data.list.length < 60 ){
							data.list=[...data.list, ...res.data.records]
						}
					})
				}
			}
			onPageScroll((e) => {
				data.scrollTop = e.scrollTop
			})
			const aaaa = (i) =>{
				uni.setStorage({
					key:"id",
					data:i
				})
				uni.navigateTo({
					url: '/pages/qa/details'
				});
			}
			return {
				...toRefs(data),
				highlight,
				aaaa
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
		border-bottom: 1px solid #eee;
		padding: 3%;
		box-sizing: border-box;
		padding: 40rpx 30rpx;
		view{
			font-size: 30rpx;
			margin-top: 10rpx;
			display: flex;
			justify-content: space-between;
			color: #777;
		}
	}

	.bor {
		position: relative;
		color: #345dc2;

		span {
			position: absolute;
			display: inline-block;
			width: 80rpx;
			height: 80rpx;
			border-bottom: 5rpx solid #345dc2;
			bottom: 0;
			right: calc(50% - 40rpx);
		}
	}

	.top {
		background-color: #fff;
		position: fixed;
		top: 100rpx;
		width: 100%;
		display: flex;
		border-bottom: 1px solid rgba(204, 204, 204, 0.432);
		justify-content: space-around;

		view {
			width: 20%;
		}
	}

	.scroll-view_H {
		display: flex;
		justify-content: space-around;
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
