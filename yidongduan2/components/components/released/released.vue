<template>
	<view>
		<view class="list-box">
			<p>近期上映<span data-v-5ce5cfbe class="word">NEW</span>
			</p>
			<p>全部<img src="../../../static/右箭头.png" alt=""></p>
		</view>
		<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="0">
			<view id="demo1" class="scroll-view-item_H uni-bg-red" v-for="item in list" :key="item.id">
				<view class="list">
					<img :src="item.mainImage.slice(-3)=='jpg'?`../../../static/${item.mainImage}` :item.mainImage">
					<h6>{{item.title}}</h6>
					<p><img src="../../../static/static/static/tab/my.png" alt="">{{item.nickName}}</p>
					<p><span><img src="../../../static/钱袋.png" v-show="item.isFree==0"
								alt="">{{item.isFree==1?'免费':item.priceDiscount}}</span> <span><img
								src="../../../static/运行.png"> {{item.studyTotal}}
							人在学</span>
					</p>
				</view>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import {
		list
	} from '../../../api/api.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				list:[],
			})
			list({
				current: 1,
				size: 10,
				sort: "new"
			}).then(res => {
				console.log(res.data.records,6666);
				data.list = res.data.records
			})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.list{
		width: 100%;
		border: 1px solid rgba(119, 119, 119, 0.1);
		padding: 10rpx;
		border-radius: 10rpx;
		img{
			width: 100%;
			height: 152rpx;
			border-radius: 10rpx;
		}
		h6{
			white-space: normal;
		}
		p:nth-child(3){
			
			font-size: 20rpx;
			margin-top: 10rpx;
			img{
				width: 30rpx;
				height: 30rpx;
				vertical-align: middle;
			}
		}
		p:nth-child(4){
			display: flex;
			justify-content: space-between;
			span:nth-child(1){
				color: #fb885d;
			}
			font-size: 20rpx;
			img{
				width: 30rpx;
				height: 30rpx;
				vertical-align: middle;
			}
		}
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 96%;
		margin: 0 auto;
	}

	.scroll-view-item {
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 40%;
		font-size: 36rpx;
		margin: 0 15rpx;
	}

	scroll-view ::-webkit-scrollbar {
		/* 下面四个属性，选一个就可 */
		display: none;
		width: 0;
		height: 0;
		background-color: transparent;
	}
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
</style>
