<!-- 封装商品组件 -->
<template>
	<view>
		<div class='liDiv' v-for="item in fuDate" :key="item.id">
			<div class='liDivLift'>
				<image :src="item.mainImage.slice(-3)=='jpg'?`../../../static/${item.mainImage}` :item.mainImage" mode="widthFix" class="liDivImage"></image>
				<span class='Tilte'>{{item.totalTime}}</span>
			</div>
			<div class='liDivRigth'>
				<p class='oneTlite'>{{item.title}}</p>
				<p class='tilteRigth'>
					<image src="../../../static/mine.png" mode=""></image> {{item.nickName}}
				</p>
				<p><span class='parice'>
						<image src="../../../static/money.png" mode=""></image>
						{{item.priceDiscount}}
					</span> <span class='numBer'>
						<image src="../../../static/运行.png" class=""></image> {{item.studyTotal}}
					</span>在学 </p>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		name:"hengPay",
		props:['fuDate'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.liDiv {
		display: flex;
		width: 100%;
		height: 88px;
		margin-left: 5px;
		padding: 10rpx 10rpx;

		.liDivLift {
			width: 47%;
			height: 100%;
			position: relative;

			.Tilte {
				font-size: 11px;
				position: absolute;
				bottom: 15rpx;
				background-color: rgba(255, 255, 255, .7);
				border-radius: 10px;
				padding: 0 4px;
				margin-left: -120rpx;
			}

			.liDivImage {
				width: 300rpx;
				height: 300rpx;
			}
		}

		.liDivRigth {
			width: 50%;
			height: 100%;
			padding: rpx;

			.oneTlite {
				display: inline-block;
				white-space: nowrap;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.numBer {
				font-size: 12px;

				image {
					width: 28rpx;
					height: 28rpx;
				}

				color: #222;
			}

			.parice {
				color: #fb6932;

				image {
					width: 20rpx;
					height: 22rpx;
				}
			}

			.tilteRigth {
				color: #999;
				font-size: 12px;
				margin-top: 20rpx;
				margin-bottom: 10rpx;

				image {
					width: 20rpx;
					height: 22rpx;
				}
			}
		}
	}
	li{
		list-style: none;
	}
</style>