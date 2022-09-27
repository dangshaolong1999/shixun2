<template>
	<view class="return" @click="return1">
		<img src="../../static/叉号.png">
	</view>
	<view class="Signin">
		<p>欢迎回来！</p>
		<view class="inp">
			<p>手机号码</p>
			<input v-model="tel" class="uni-input" maxlength="11" placeholder="请输入手机号" />
		</view>
		<view class="inp inp1">
			<p>验证码</p>
			<input v-model="verification" class="uni-input" maxlength="6" placeholder="请输入手机验证码" />
			<button @click="hverification">{{text?`${second}s`:'获取验证码'}}</button>
		</view>
		<button class="but" @click="Signin">登录</button>
	</view>
	<view class="footer">
		<label class="radio"><input :checkout="box" class="box" type="checkbox">
			请认真阅读并同意 <a>《用户服务协议》</a><a>《隐私协议政策》</a>
		</label>
	</view>
</template>

<script>
	import {Code,succeeded} from '../../api/api.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	export default {
		setup() {
			const router = useRouter()
			const data = reactive({
				box: true,
				tel: '', //手机号
				verification: '', //验证码
				text:false,
				second:60
			})
			const return1 = () => {
				router.go(-1)
			}
			//验证码
			const hverification = () => {
				let regs = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; // 11位手机
				if (!regs.test(data.tel)) {
					uni.showToast({
						title: '手机格式错误',
						icon: 'none'
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
			const Signin = () => {
				//判断是否勾选
				if(!data.box){
					uni.showToast({
						title: '请认真阅读用户及隐私政策',
						icon: 'none'
					});
					return
				}
				//判断手机号
				let regs = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; // 11位手机
				if(!regs.test(data.tel)){
					uni.showToast({
						title: '请输入有效手机号',
						icon: 'none'
					});
					return
				}
				console.log(data.verification);
				//判断验证码
				if(data.verification.length != 6){
					uni.showToast({
						title: '验证码错误',
						icon: 'none'
					});
					return
				}
				//接口
				succeeded({mobile: data.tel, code: data.verification}).then(res => {
					console.log(res);
					uni.setStorage({
						data:res.data.access_token,
						key:'token'
					})
					uni.setStorage({
						data:res.data.userInfo,
						key:'userInfo',
					})
					router.go(-1)
				})
			}
			
			
			
			return {
				...toRefs(data),
				return1,
				hverification,
				Signin
			}
		}
	}
</script>

<style lang="scss">
	.footer {
		position: fixed;
		bottom: 0;
		font-size: 24rpx;
		left: 5%;
		width: 100%;
		height: 90rpx;
		line-height: 45rpx;

		.box {
			width: 40rpx;
			height: 40rpx;
			float: left;
			vertical-align: middle;
			margin-right: 10rpx;
		}

		a {
			color: #345dc2;
		}
	}

	.but {
		background-color: #345dc2;
		color: #fff;
		margin-top: 50rpx;
	}

	.Signin {
		width: 90%;
		margin: 180rpx auto 0;

		p {
			font-size: 48rpx;
		}

		.inp1 {
			margin-top: 50rpx !important;
		}

		.inp {
			margin-top: 100rpx;
			background-color: rgba(119, 119, 119, 0.1);
			padding: 10rpx 0 10rpx 20rpx;
			border-radius: 10rpx;

			p {
				font-size: 30rpx;
				margin-bottom: 20rpx;
			}

			input {
				width: 50%;
				float: left;
				font-size: 32rpx;
				margin-top: 5rpx;
			}

			button {
				width: 160rpx;
				height: 60rpx;
				line-height: 60rpx;
				color: #fff;
				font-size: 26rpx;
				background-color: #345dc2;
				float: right;
			}
		}

	}

	.return {
		margin: 40rpx;

		img {
			width: 40rpx;
			height: 40rpx;
		}
	}

	* {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>
