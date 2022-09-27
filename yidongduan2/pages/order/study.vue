<template>
	<view>
		<view class="header">
			<img src="../../static/左箭头.png" @click="$router.go(-1)">
			<h4>我的学习</h4>
		</view>
		<view class="con" v-for="item in list" :key="item.id">
			<div class="left">
				<h4>{{item.title}}</h4>
				<view class="">
					<span>已学{{item.percent}}%</span>
					<progress :percent="item.percent" stroke-width="3" />
				</view>
			</div>
			<div class="right">
				<img :src="item.mainImage.slice(-3)=='jpg'?`../../../static/${item.mainImage}` :item.mainImage" alt="">
			</div>
		</view>
	</view>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	import {course} from '../../api/api.js'
	export default {
		setup() {
			const data = reactive({
				list:[]
			})
			course().then(res => {
				console.log(res.data);
				data.list = res.data
			})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.con{
		display: flex;
		margin: 20rpx 0;
		.left{
			width: 65%;
			padding: 10rpx;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			span{
				color: #777;
			}
		}
		.right{
			width: 35%;
			img{
				width: 100%;
				height: 150rpx;
				border-radius: 10rpx;
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
</style>
