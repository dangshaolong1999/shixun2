<template>
	<view class="header">
		<img src="../../static/左箭头.png" alt="返回" @click="superior">
		<view><input @blur='keydown1' type="text" placeholder="所搜你想要的内容" v-model="searchId"><img
				src="../../static/放大镜.png" alt=""></view>
		<span @click="superior">取消</span>
	</view>
	<view class="hot">
		<p>热门搜索</p>
		<ul>
			<li v-for="(item,index) in reList" :key="index" @click='searchClick(item.name)'>{{item.name}}</li>
		</ul>
	</view>
	<view class="history">
		<view class="a"><span>历史搜索</span><span @click="empty">清空</span></view>
		<ul>
			<li v-for="(item,index) in searchArr" :key="index" @click='searchClick(item.name)'>{{item.name}}</li>
		</ul>
	</view>
</template>

<script>
	import {
		swiper
	} from '../../api/api.js'
	import {
		useRouter
	} from 'vue-router'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		onLoad() {
			this.placeholder1 = '请输入要搜索的内容'
			uni.getStorage({
				key: 'key',
				success: (res) => {
					this.searchArr = JSON.parse(res.data)
					// this.searchArr = res.data
				}
			});
		},
		setup() {
			const data = reactive({
				searchId: '',
				reList: [],
				searchArr: [],
			})
			const router = useRouter()
			const superior = () => {
				router.go(-1)
			}
			swiper().then(res => {
				console.log(res.data);
				data.reList = res.data
			})
			// 点击热门搜索事件
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
			const keydown1 = () => {
				if (data.searchId == '' || data.searchId == 'undefined' || data.searchId == 0) {
					uni.showToast({
						icon: 'error',
						title: '请输入内容',
						mask: true
					})
				} else {
					uni.navigateTo({
						url: `/pages/CommodityDetails/CommodityDetails?user=${data.searchId}`
					})
					data.searchArr.push({
						name: data.searchId
					})
					uni.setStorage({
						key: 'key',
						data: data.searchArr
					})
				}
			}
			//清空事件
			const empty = () => {
				localStorage.removeItem('key')
				data.searchArr = []
			}
			return {
				...toRefs(data),
				superior,
				keydown1,
				empty,
				searchClick
			}
		}
	}
</script>

<style lang="scss">
	.history {
		width: 90%;
		margin: 0 auto;
		margin-top: 30rpx;

		.a {
			display: flex;
			justify-content: space-between;
			margin-bottom: 30rpx;

			span:nth-child(2) {
				color: #ccc;
			}
		}

		ul {
			display: flex;
			list-style: none;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			justify-content: space-around;

			li {
				text-align: center;
				width: 25%;
				border: 1px solid #ccc;
				padding: 10rpx 10rpx;
				font-size: 26rpx;
				margin-bottom: 20rpx;
				border-radius: 10rpx;
			}
		}
	}

	.hot {
		width: 90%;
		margin: 0 auto;

		p {
			font-size: 36rpx;
			margin-bottom: 20rpx;
		}

		ul {
			display: flex;
			list-style: none;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			justify-content: space-between;

			li {
				width: 25%;
				text-align: center;
				border: 1px solid #ccc;
				padding: 10rpx 10rpx;
				font-size: 26rpx;
				margin-bottom: 20rpx;
				border-radius: 10rpx;
			}
		}
	}

	.header {
		display: flex;
		height: 100rpx;
		align-items: center;

		img {
			width: 52rpx;
			height: 52rpx;
			margin: 0 10rpx;
		}

		view {
			flex: 1;
			position: relative;

			img {
				position: absolute;
				width: 40rpx;
				height: 40rpx;
				left: 6rpx;
				top: 26rpx;
			}

			input {
				width: 80%;
				background-color: rgba(204, 204, 204, 0.336);
				padding: 10rpx 50rpx 10rpx 70rpx;
				font-size: 30rpx;
				border-radius: 40rpx;
				display: inline-block;
				margin-top: 14rpx;
			}
		}



		span {
			margin: 0 10rpx;
		}
	}
</style>
