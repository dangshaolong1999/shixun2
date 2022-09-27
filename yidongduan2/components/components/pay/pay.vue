<template>
	<view>
		<view class="list-box">
			<p>付费精选<span data-v-5ce5cfbe class="word">NLCE</span>
			</p>
			<p>全部<img src="../../../static/右箭头.png" alt=""></p>
		</view>
		<view class="box" v-for="item in list" :key="item.id">
			<view class="img">
				<img :src="item.mainImage.slice(-3)=='jpg'?`../../../static/${item.mainImage}` :item.mainImage">
			</view>
			<view class="left">
				<h5>{{item.title}}</h5>
				<p><img src="../../../static/static/static/tab/my.png" alt="">{{item.nickName}}</p>
				<p><span><img src="../../../static/钱袋.png"
							alt="">{{item.isFree==1?'免费':item.priceDiscount}}</span> <span><img
							src="../../../static/运行.png"> {{item.studyTotal}}
						人在学</span>
				</p>
			</view>
		</view>
	</view>
	
</template>

<script>
	import {list} from '../../../api/api.js'
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data = reactive({
				list:[],
				page:1,
				moer:false
			})
			list({current: data.page, isFree: 0,size: 30}).then(res => {
				console.log(res.data.records);
				data.list = res.data.records
			})
			window.onscroll = function(){
				let clientHeight = document.documentElement.clientHeight;
				let scrollHeight = document.body.scrollHeight;
				let scrollTop = document.documentElement.scrollTop;
				if(data.list.length < 60){
					
				}else{
					data.moer=true
				}
				if (scrollTop + clientHeight>= scrollHeight){
					list().then(res => {
						if(data.list.length < 60 ){
							data.list=[...data.list, ...res.data.records]
						}
					})
				}
			}
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.list-box {
		display: flex;
		justify-content: space-between;
		width: 90%;
		margin: 0 auto;
		align-items: center;
		margin-top: 50rpx;
	
		p:nth-child(1) {
			span {
				margin-left: 10rpx;
			}
		}
	
		p:nth-child(2) {
			color: #959da5;
			font-size: 30rpx;
	
			img {
				width: 40rpx;
				height: 40rpx;
				vertical-align: middle;
			}
		}
	}
	
	.list-box .word[data-v-5ce5cfbe] {
		font-size: 9px;
		background-image: -webkit-linear-gradient(left, #fb6932, #fa140e);
		background-image: linear-gradient(90deg, #fb6932, #fa140e);
		color: #fff;
		padding: 0 4px;
		border-radius: 14px 14px 14px 0;
	}
	
	.box {
		width: 90%;
		margin: 10rpx auto;
		display: flex;
	
		.img {
			width: 40%;
			margin-right: 10rpx;
	
			img {
				width: 100%;
				height: 152rpx;
				border-radius: 10rpx;
			}
		}
	
		.left {
			width: 60%;
	
			h5 {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 100%;
			}
	
			p {
				margin-top: 10rpx;
				font-size: 30rpx;
	
				img {
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
				}
	
				span:nth-child(1) {
					color: #ff9800;
					margin-right: 20rpx;
				}
			}
		}
	}
</style>
