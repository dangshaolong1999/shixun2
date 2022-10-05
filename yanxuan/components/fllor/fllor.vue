<template>
	<view class="content1" v-for="(item,index) in list" :key="index">
		<view class="">
		<image :src="item.floor_title.image_src" class="img"></image>
		</view>
		<view class="grid">
			<view v-for="(obj,index) in item.product_list.slice(0,1)" :key="index">
			<image :src="obj.image_src"></image></view>
			<view v-for="(obj,index) in item.product_list.slice(1,5)" :key="index">
				<image :src="obj.image_src" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		props:['list'],
		setup() {
			const data = reactive({})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.content1{
		margin: 20rpx 0;
		.img{
			width: 100%;
			height: 50rpx;
		}
		.grid {
			display: grid;
			// grid-template-columns: [a1]1fr [a2]1fr [a2]1fr;
			// grid-template-rows: [a1]170rpx [a2]170rpx;
			grid-template:
				"a2 a1 a3"170rpx
				"a2 a1 a3"170rpx
				 / 1fr 1fr 1fr;
			grid-gap: 15rpx 15rpx;
			view {
				image{
					width: 100%;
					height: 100%;
					border-radius: 5rpx;
				}
			}
			view:nth-of-type(1) {
				grid-area: a2;
			}
		}
	}
	

    


	// .grid :nth-of-type(4){
	// 	grid-area: a2;
	// }
</style>
