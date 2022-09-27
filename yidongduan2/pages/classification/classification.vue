<template>
	<view>
		<header>
			<view>分类</view>
			<img src="../../static/放大镜.png" alt="">
		</header>
		<view class="box">
			<view class="left">
				<view @click="highlight(item)" :class="{col:id==item.id}" v-for="item in list" :key="item.id">{{item.name}}<span></span></view>
			</view>
			<view class="right">
				<view  @click='searchClick(item.name)' v-for="item in item.labelList" :key="item.id">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {swiper} from '../../api/api.js'
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data = reactive({
				list:[],
				id:1,
				item:[]
			})
			swiper().then(res => {
				console.log(res.data);
				data.list = res.data
				data.item = res.data[0]
			})
			const highlight = (item) => {
				data.id = item.id
				data.item = item
			}
			const searchClick = (item) => {
				uni.navigateTo({
					url: `/pages/CommodityDetails/CommodityDetails?user=${item}`
				})
				data.searchArr.push({
					name: item
				})
				uni.setStorage({
					key: 'key',
					data: item
				})
			}
			return {
				...toRefs(data),
				highlight,
				searchClick
			}
		}
	}
</script>

<style lang="scss">
	.col{
		color: #345dc2;
		position: relative;
		span{
			display: inline-block;
			position: absolute;
			border-left: #345dc2 2px solid;
			width: 40rpx;
			height: 40rpx;
			left: 0;
			top: calc(50% - 20rpx);
		}
	}
	.box{
		// display: flex;
		.left{
			float: left;
			width: 30%;
			// min-height:  calc(100vh - 60rpx);
			height: calc(100vh - 173rpx);
			background-color: rgba(204, 204, 204, 0.2);
			view{
				text-align: center;
				height: 100rpx;
				line-height: 100rpx;
			}
		}
		.right{
			float: left;
			width: 70%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			margin-top: 40rpx;
			view{
				width: 30%;
				border: 1px solid #ccc;
				border-radius: 20rpx;
				height: 50rpx;
				line-height: 50rpx !important;
				font-size: 24rpx;
				text-align: center;
				margin: 20rpx 0;
			}
		}
	}
header{
	background-color: #345dc2;
	color: #fff;
	display: grid;
	grid-template-rows: repeat(1,60rpx);
	grid-template-columns: repeat(10,1fr);
	align-items: center;
	view{
		grid-area: 1/1/1/span 10;
		text-align: center;
		font-size: 30rpx;
	}
	img{
		grid-area: 1/10/11/span 1;
		width: 40rpx;
		height: 40rpx;
	}
}
</style>
