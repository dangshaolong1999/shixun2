<template>
	<view class="box">
		<view class="header">
			<img src="../../static/左箭头.png" alt="">
			<h4>修改手机号</h4>
		</view>
		<view class="content">
			<view>
				<span>手机号：</span><input v-model="tel" class="uni-input" maxlength="11" placeholder="请输入手机号码" />
			</view>
			<view>
				<span>验证码：</span><input v-model="verification" class="uni-input" maxlength="6" placeholder="请输入验证码" /><button @click="hverification">{{text?`${second}s`:'获取验证码'}}</button>
			</view>
		</view>
		<button class="but" @click="modify">提交</button>
	</view>

</template>

<script>
	import {Code,succeeded,modifyTel} from '../../api/api.js'
	import {reactive,toRefs} from 'vue'
	import {useRouter} from 'vue-router'
	export default {
		setup() {
			const router = useRouter()
			const data = reactive({
				tel:'',
				verification:'',
				text:false,
				second:60,
				userInfo:[]
			})
			const hverification = () => {
				let regs = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; // 11位手机
				if (!regs.test(data.tel)) {
					uni.showToast({
						title: '手机格式错误',
						icon: 'none',
					});
				}else{
					if(data.text){
						uni.showToast({
							title: '60秒后在发送',
							icon: 'none'
						});
						return
					}
					Code({mobile: data.tel, templateCode: "MSM_1999123123"}).then(res => {
						console.log(res);
						if(res.code==20000){
							uni.showToast({
								title: res.message,
								icon: 'none'
							});
							let a = setInterval(() =>{
								data.text = true
								data.second--
								if(data.second==0){
									data.second=60
									data.text = false
									clearInterval(a)
								}
							},1000)
						}
					})
				}
			}
			const modify = () => {
				uni.getStorage({
					key:"userInfo",
					success(res) {
						console.log(res.data);
						data.userInfo = res.data
					}
				})
				modifyTel({mobile: data.tel, code: data.verification,userInfo:data.userInfo}).then(res => {
					console.log(res);
					if(res.code==20000){
						uni.showToast({
							title:res.message,
							icon:"none"
						})
						router.push('/pages/personal/personal')
					}
				})
			}
			return {
				...toRefs(data),
				hverification,
				modify
			}
		}
	}
</script>

<style lang="scss">
	.but{
		width: 94%;
		margin: 100rpx auto;
		background-color: #345dc2;
		color: #fff;
	}
	.content{
		width: 94%;
		margin: 100rpx auto 0;
		background-color: #fff;
		padding: 20rpx 20rpx 20rpx 20rpx;
		box-sizing: border-box;
		border-radius: 25rpx;
		view:nth-child(2){
			margin-top: 40rpx;
		}
		view{
			display: flex;
			align-items: center;
			input{
				flex: 1;
			}
			button{
				width: 30%;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 30rpx;
				background-color: #345dc2;
				color: #fff;
			}
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

	.box {
		height: 100vh;
		background-color: rgba(119, 119, 119, 0.08);
	}
	*{
		margin: 0;
		padding: 0;
	}
</style>
