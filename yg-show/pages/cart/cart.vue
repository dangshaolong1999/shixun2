<template>
	<view>
		<header1></header1>
		<view class="wrap">
			<view class="left">
				<scroll-view scroll-y="true" class="scroll-Y">
					<view @click="highlight(item)" :class="{reactive:id == item.cat_id}"
						class="scroll-view-item uni-bg-red" v-for="item in list" :key="item.cat_id">{{item.cat_name}}
					</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view scroll-y="true" class="scroll-Y">
					<view class="box" v-for="item in child.children" :key="item.cat_id">
						<view class="text">/{{ item.cat_name}}/</view>
						<view class="box1">
							<view class="box2" v-for="obj in item.children" :key="obj.cat_id">
								<image :src="obj.cat_icon"></image>
								<view class="">{{obj.cat_name}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		categories
	} from '../../http/api/api'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				list: [],
				id: 1,
				child: []
			})
			categories().then(res => {
				console.log(res.message);
				data.list = res.message
				data.child = res.message[0]
			})
			const highlight = (item) => {
				data.id = item.cat_id
				data.child = item
			}
			return {
				...toRefs(data),
				highlight
			}
		}
	}
</script>

<style lang="scss">
	.reactive {
		color: red;
		border-left: 4rpx solid red;
	}

	.scroll-Y {
		max-height: calc(100vh - 100rpx);
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		text-align: center;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.wrap {
		width: 100%;

		.left {
			float: left;
			width: 30%;
			max-height: calc(100vh - 100rpx);

			// height: calc(100vh - 100rpx);
		}

		.right {
			float: left;
			width: 70%;
			height: calc(100vh - 100rpx);
			.box {
				.text {
					text-align: center;
				}
			}
			.box1{
				display: flex;
				flex-wrap: wrap;
				.box2{
					margin: 10rpx 0;
					width: 33%;
					text-align: center;
					image{
						width: 100rpx;
						height: 100rpx;
					}
				}
				
			}

		}
	}

	body,
	html,
	view {
		margin: 0;
		padding: 0;
	}
</style>
