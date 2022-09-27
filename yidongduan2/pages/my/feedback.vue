<template>
	<view class="bgc">
		<view class="header">
			<img src="../../static/左箭头.png" @click="$router.go(-1)">
			<h4>意见反馈</h4>
		</view>
		<view class="radio">
			<view>
				<radio-group @change="radioChange" v-model="type">
					<label class="radio">
						<radio value="内容意见" checked="true" />内容意见
					</label>
					<label class="radio">
						<radio value="产品意见" />产品意见
					</label>
					<label class="radio">
						<radio value="其他" />其他
					</label>
				</radio-group>
			</view>
		</view>
		<view class="tet">
			<textarea placeholder="请填写具体内容帮助我们了解你的意见和建议" v-model="content"></textarea>
			<input type="text" placeholder="填写你的QQ" v-model="qq">
			<input type="text" placeholder="填写你的微信" v-model="weixin">
			<button @click="Submit">提交</button>
		</view>
	</view>
</template>

<script>
	import {feedback} from '../../api/api.js'
	import {reactive,toRefs} from 'vue'
	import {useRouter} from 'vue-router'
	export default {
		setup() {
			const data = reactive({
				type:1,
				content:'',
				qq:'',
				weixin:''
			})
			const router = useRouter()
			const radioChange = (e) => {
				console.log(e.detail.value);
			}
			const Submit = () => {
				feedback({type: data.type, content: data.content, qq: data.qq, weixin: data.weixin}).then(res => {
					console.log(res);
					uni.showToast({
						title:'提交成功',
						icon:'none'
					})
					router.go(-1)
					data.content = ''
					data.qq = ''
					data.weixin = ''
				})
			}
			return {
				...toRefs(data),
				radioChange,
				Submit
			}
		}
	}
</script>

<style lang="scss">
	.tet{
		width: 90%;
		margin: 10rpx auto;
		textarea{
			border: 1px solid #ccc;
			width: 100%;
			padding: 10rpx;
			box-sizing: border-box;
		}
		input{
			padding: 10rpx;
			border: 1px solid #ccc;
			margin: 20rpx 0;
		}
		button{
			background-color: #007aff;
			color: #fff;
			margin: 40rpx 0;
		}
	}
	.radio {
		width: 90%;
		margin: 20rpx auto;

		view {
			radio-group {
				display: flex;
				justify-content: space-around;
				text-align: center;
			}

		}
	}

	.bgc {
		background-color: rgba(119, 119, 119, 0.1);
		height: 100vh;
	}

	.header {
		display: grid;
		height: 100rpx;
		align-items: center;
		padding: 0 20rpx;
		border-bottom: 20rpx solid rgba(119, 119, 119, 0.1);
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
