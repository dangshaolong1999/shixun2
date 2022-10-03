<template>
	<header1></header1>
	<view class="wrap">
		<u-swiper  height="320" :list="data.list" name="image_src" mode="dot"></u-swiper>
	</view>
	<view class="index_cate">
		<image v-for="(item,index) in data.catesList" :key="index" :src="item.image_src" mode=""></image>
	</view>
	<floor :list="data.floorList"></floor>
</template>

<script lang="ts" setup>
	import {switchlist,nav1,floorList} from '../../http/api/api.js'
	import {reactive} from 'vue'
	import floor from '../../components/fllor/fllor.vue'
	import * as TS from '../../http/interface'
	const data: {
		list: TS.List;
		catesList: TS.CatesList;
		floorList: TS.FloorList
	} = reactive({
		list:[],
		catesList:[],
		floorList: [],
	})
	switchlist().then(res => {
		data.list = res.message
		// console.log(res.message,111);
	})
	nav1().then(res => {
		data.catesList = res.message
		// console.log(res.message,222);
	})
	floorList().then(res => {
		// console.log(res.message);
		data.floorList = res.message
		// console.log(data.floorList,666666666);
	})
</script>

<style lang="scss">
	.index_cate{
		display: flex;
		justify-content: space-around;
		margin: 20rpx 0;
		image{
			width: 130rpx;
			height: 140rpx;
		}
	}
	

</style>
