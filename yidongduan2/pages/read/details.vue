<template>
		<view class="header">
			<img src="../../static/左箭头.png" @click="$router.go(-1)">
			<h4>{{details.title}}</h4>
		</view>
		<view class="nav">
			<view v-for="item in details.labelList">{{item.name}}</view>
		</view>
		<h2>{{details.title}}</h2>
		<view class="name">
			<img src="../../static/logo.png" alt=""><p>{{details.nickName}} · <span>{{details.updateDate}} · {{details.viewCount}}人阅读</span></p>
		</view>
		<div class="a1" v-html="details.htmlContent"></div>
		<view class="comment">
			<h4>热门评论</h4>
			<view class="aaa" v-for="item in list" :key="item.id">
				<img :src="item.userImage==null?`../../static/logo.png` :item.userImage" alt="">
				<view>
					<p><span>{{item.nickName}}</span><span>{{item.createDate}}</span></p>
					<p>{{item.content}}</p>
				</view>
			</view>
		</view>
		<footer>
			<input v-model="inp" type="text" placeholder="有何意见展开讲讲....."><button @click="cccc">提交</button>
		</footer>
</template>

<script>
	import {article,articlelist,comment} from '../../api/api.js'
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data = reactive({
				details:[],
				list:[],
				inp:'',
				id:0,
			})
			uni.getStorage({
				key:'id',
				success(res) {
					console.log(res.data);
					data.id = res.data
					article(res.data).then(res => {
						console.log(res.data);
						data.details = res.data
					})
					articlelist(res.data).then(res => {
						console.log(res.data);
						data.list = res.data
					})
				}
			})
			const cccc = () => {
				comment({content: data.inp, articleId: data.id}).then(res => {
					console.log(res);
					uni.showToast({
						title:res.message,
						icon:"none"
					})
					data.inp = ''
				})
			}
			return {
				...toRefs(data),
				cccc
			}
		}
	}
</script>

<style lang="scss">
	footer{
		position: sticky;
		bottom: 20rpx;
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		background-color: #fff;
		display: flex;
		input{
			width: 70%;
			float: left;
			height: 60rpx;
			margin-left: 20rpx;
			background-color: rgba(119, 119, 119, 0.1);
			border-radius: 40rpx;
			padding: 0 20rpx;
		}
		button{
			width: 150rpx;
			height: 60rpx;
			font-size: 24rpx;
		}
	}
	.aaa{
		width: 96%;
		margin: 0 auto;
		display: flex;
		margin: 20rpx 0;
		img{
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
		view{
			flex: 1;
			p:nth-child(1){
				display: flex;
				justify-content: space-between;
				color: #777;
				font-size: 30rpx;
			}
			p:nth-child(2){}
		}
	}
	.comment{
		width: 96%;
		margin: 20rpx auto;
		h4{
			padding: 0 40rpx;
			border-left: 6rpx solid #345dc2;
		}
	}
	.a1{
		width: 96%;
		margin: 0 auto;
	}
	.name{
		display: flex;
		align-items: center;
		width: 96%;
		margin: 20rpx auto;
		img{
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
		span{
			color: #777;
			font-size: 28rpx;
		}
	}
	h2{
		width: 96%;
		margin: 20rpx auto;
	}
	.nav{
		width: 96%;
		margin: 0 auto;
		display: flex;
		view{
			margin: 20rpx 10rpx;
			color: #429cff;
			border: 1px solid #429cff;
			border-radius: 50rpx;
			padding: 10rpx 30rpx;
		}
	}
.header {
		display: grid;
		height: 100rpx;
		align-items: center;
		padding: 0 20rpx;
		border-bottom: 2rpx solid rgba(119, 119, 119, 0.1);
		background-color: #fff;

		img {
			grid-area: 1/1/1/1;
			width: 40rpx;
			height: 40rpx;
		}

		h4 {
			grid-area: 1/1/1/1;
			text-align: center;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
