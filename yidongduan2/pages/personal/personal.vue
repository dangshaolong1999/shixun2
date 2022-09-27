<template>
	<view class="bgc">
		<view class="header">
			<img src="../../static/左箭头.png" @click="$router.go(-1)">
			<h4>个人资料</h4>
		</view>
		<ul>
			<li>
				<view>头像</view>
				<view>
					<img :src="userInfo.imageUrl">
					<img src="../../static/右箭头.png">
				</view>
			</li>
			<li @click="user">
				<view>用户名</view>
				<view>
					<p>{{userInfo.username}}</p>
					<img src="../../static/右箭头.png">
				</view>
			</li>
			<li @click="$router.push('/pages/auth/auth')">
				<view>手机号</view>
				<view>
					<p>{{userInfo.mobile}}</p>
					<img src="../../static/右箭头.png">
				</view>
			</li>
			<li @click="$router.push('/pages/modifyname/modifyname')">
				<view>昵称</view>
				<view>
					<p>{{userInfo.nickName}}</p>
					<img src="../../static/右箭头.png">
				</view>
			</li>
			<li @click="flag=true">
				<view>性别</view>
				<view>
					<p>{{userInfo.sex==1?'女':'男'}}</p>
					<img src="../../static/右箭头.png">
				</view>
			</li>
		</ul>
		<button @click="signout">退出登录</button>
	</view>
	<!-- 修改性别 -->
	<view class="sex" v-show="flag" @click="b">
		<view>
			<button>男</button>
			<button>女</button>
			<button>取消</button>
		</view>
	</view>
	<!-- 修改昵称 -->
</template>

<script>
	import {useRouter} from 'vue-router'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const router = useRouter()
			const data = reactive({
				userInfo: [],
				flag:false
			})
			uni.getStorage({
				key: 'userInfo',
				success(res) {
					console.log(res.data);
					data.userInfo = res.data
				},
				fail() {
					console.log(1);
				}
			})
			const signout =() => {
				uni.clearStorage()
				router.push('/pages/my/my')
			}
			const user = ()=>{
				uni.showToast({
					title:'用户名不允许修改',
					icon:"none"
				})
			}
			const b = () => {
				data.flag = false
			}
			return {
				...toRefs(data),
				signout,
				user,
				b
			}
		}
	}
</script>

<style lang="scss">
	
	.sex{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(119, 119, 119, 0.26);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		view{
			animation-name: move;
			animation-duration: .5s;
			button:nth-child(1){
				margin: 0;
			}
			button:nth-child(2){
				margin: 0;
			}
			button:nth-child(3){
				margin: 10rpx 0;
			}
		}
		@keyframes move{
			0%{
				height: 0;
			}
			100%{
				height: 300rpx;
			}
		}
	}
	.bgc{
		background-color: rgba(119, 119, 119, 0.1);
		height: 100vh;
	}
	button {
		background-color: #fff;
	}

	ul {
		width: 100%;

		li:nth-child(3),
		li:nth-child(5) {
			border-bottom: 20rpx solid rgba(119, 119, 119, 0.1);
		}

		li {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30rpx;
			border-bottom: 1px solid rgba(119, 119, 119, 0.2);
			background-color: #fff;

			view:nth-child(1) {
				width: 30%;
			}

			view:nth-child(2) {
				display: flex;
				align-items: center;

				img:nth-child(1) {
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
				}

				img:nth-child(2) {
					width: 40rpx;
					height: 40rpx;
					margin-left: 30rpx;
				}
			}
		}
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

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
