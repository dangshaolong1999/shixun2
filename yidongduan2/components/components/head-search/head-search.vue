<template>
	<view class="view" :style="`background-color: ${clock}`">
		
			<view class="input">
			<img src="../../../static//放大镜.png">
			搜索你想要的内容
		</view>
		
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		props: ['clock'],
		setup(props, tcx) {
			const data = reactive({})
			console.log(props);
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.view {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		height: 100rpx;
		color: #777;
		position: fixed;
		top: 0;
		z-index: 1;

		.input {
			width: 96%;
			border-radius: 40rpx;
			background-color: #fff;
			font-size: 26rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;

			img {
				width: 30rpx;
				height: 30rpx;
				vertical-align: middle;
			}
		}
	}
</style>
