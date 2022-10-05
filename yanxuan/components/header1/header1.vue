<template>
	<view class="content">
		<button @click="search">搜索</button>
	</view>
</template>

<script>
	export default {
		setup(){
			const search =() => {
			   uni.navigateTo({
			   	url:'/pages/search/search'
			   })
			}
			return {
				search
			}
		}
	}
</script>

<style lang="scss">
.content {
		width: 100%;
		height: 100rpx;
		background-color: #eb4450;
		display: flex;
		align-items: center;

		button {
			width: 96%;
			height: 80rpx;
			line-height: 80rpx;
			margin: 0 auto;
			color: #777;
		}
	}
</style>