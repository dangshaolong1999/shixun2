<template>
	<view class="box">
		<view class="header">
			<input type="text" @input="search" placeholder="请输入你要搜索的商品" v-model="inp">
			<button @click="cancel">取消</button>
		</view>
		<view class="ul">
			<view @click="godetails(item.goods_id)" v-for="item in list" :key="item.goods_id">{{item.goods_name}}</view>
		</view>

	</view>
</template>

<script lang="ts">
	import {
		qsearch
	} from '../../http/api/api'
	import {
		reactive,
		toRefs
	} from 'vue'
	import {
		debounce
	} from '../../http/shake.js'
	export default {
		setup() {
			const data = reactive({
				inp: '',
				list: []
			})
			const search = debounce(function() {
				qsearch(data.inp).then(res => {
					console.log(res.message);
					data.list = res.message
				})
			}, 500)
			const cancel = () => {
				data.list = []
				data.inp = ''
			}
			const godetails = (id) => {
				console.log(id);
				uni.navigateTo({
					url:`/pages/details/details?id=${id}`
				})
			}
			return {
				...toRefs(data),
				search,
				cancel,
				godetails
			}
		}
	}
</script>

<style lang="scss">
	.ul {
		width: 94%;
		margin: 20rpx auto;
		background-color: #fff;

		view {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			padding: 15rpx 10rpx;
			font-size: 30rpx;
		}
	}

	.box {
		width: 100%;
		min-height: 100vh;
		background-color: #ccc;
		overflow: hidden;
		box-sizing: border-box;

		.header {
			display: flex;
			width: 100%;
			align-items: center;
			box-sizing: border-box;

			input {
				flex: 1;
				background-color: #fff;
				padding: 3rpx 20rpx;
				margin: 20rpx 0 20rpx  20rpx;
			}

			button {
				width: 110rpx;
				height: 60rpx;
				padding: 0;
				margin: 0 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 26rpx;
			}
		}

	}
</style>
