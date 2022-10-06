<template>
	<view>
		<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button>
	</view>
</template>

<script>
import { toRefs,reactive } from "vue"
	export default {
		setup(){
			const data = reactive({
				userInfo:{}
			})
			const getUserInfo = (e) => {
				console.log(e,666);
				data.userInfo = e.detail.userInfo
				uni.setStorage({
					key:'userInfo',
					data:data.userInfo
				})
				uni.navigateBack({
					delta:1
				})
			}
			return {
				...toRefs(data),
				getUserInfo
			}
		}
	}
</script>

<style lang="scss">
button{
	width: 80%;
	margin: 40rpx auto;
	background-color: transparent !important;
	color: #41a863 !important;
	border: 1px solid #41a863 !important;
}
</style>
