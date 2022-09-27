<template>
	<view class="header">
		<img src="../../static/左箭头.png" alt="">
		<h4>个人资料</h4>
	</view>
	<view class="name">
		<input type="text" v-model="name"><span @click="a">修改</span>
	</view>
</template>

<script>
	import {useRouter} from 'vue-router'
	import {
		modifyName
	} from '../../api/api.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const router = useRouter()
			const data = reactive({
				name: '',
				userInfo: ''
			})
			uni.getStorage({
				key: 'userInfo',
				success(res) {
					data.name = res.data.nickName
					data.userInfo = res.data
				}
			})
			const a = () => {
				modifyName({
					...data.userInfo,
					nickName: data.name
				}).then(res => {
					console.log(res);
					router.go(-1)
				})
			}

			return {
				...toRefs(data),
				a
			}
		}
	}
</script>

<style lang="scss">
	.name {
		display: flex;
		width: 94%;
		margin: 0 auto;
		align-items: center;

		input {
			flex: 1;
			border: 1px solid rgba(119, 119, 119, 0.2);
			padding: 20rpx 20rpx;
			margin-right: 15rpx;
		}

		span {
			color: #409bff;
		}
	}

	.header {
		display: grid;
		height: 100rpx;
		align-items: center;
		padding: 0 20rpx;
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
