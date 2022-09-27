<template>
	<navigator  url="../search/search">
	   <myinput :clock="clock"></myinput>
	</navigator >
	<swiper class="swiper" @change="img" circular indicator-dots="true" autoplay="true" interval="2000" duration="500"
		indicator-color="rgba(225,225,225,.5)" indicator-active-color="#fff">
		<swiper-item v-for="item,index in src" :key="index" :style="`background:${item.bgc}`">
			<view class="swiper-item uni-bg-red">
				<image :src="item.img"></image>
			</view>
		</swiper-item>
	</swiper>
	<view class="classification">
		<ul>
			<li  @click='searchClick(item.name)' v-for="item,index in fication" v-show="item.id<8">{{item.name}}</li>
			<li @click="$router.push('/pages/classification/classification')">全部分类</li>
		</ul>
	</view>
	<HotList :title="Hottitle" :list="Hotlist"></HotList>
	<released></released>
	<HotList :title="Mtitle" :list="Hotlist"></HotList>
	<pay></pay>
	<Back :scrollTop="scrollTop"></Back>
	<!-- <img class="top" @click="backtop" v-show="scrollTop>=800" src="https://www.mescroll.com/img/mescroll-totop.png" > -->
</template>

<script>
	import Back from '../../components/components/Back-top/Back-top.vue'
	//热门推荐接口
	import {
		list
	} from '@/api/api.js';
	import {
		onPageScroll,onPullDownRefresh
	} from '@dcloudio/uni-app'
	//付费精选组件
	import pay from '../../components/components/pay/pay.vue'
	//近期上映组件
	import released from '../../components/components/released/released.vue'
	// 列表组件
	import HotList from '../../components/components/HotList/HotList.vue'
	// 头部组件
	import myinput from '@/components/components/head-search/head-search.vue'
	import {
		swiper
	} from '../../api/api.js';
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		components: {
			myinput,
			HotList,
			released,
			pay,
			Back
		},
		setup() {
			const data = reactive({
				src: [{
						img: '../../static/static/images/banner1.jpg',
						bgc: 'linear-gradient(to top, #fff 0%, #3a2e5e 100%)'
					},
					{
						img: '../../static/static/images/banner2.jpg',
						bgc: 'linear-gradient(to top, #fff 0%, #68ba0f 100%)'
					},
					{
						img: '../../static/static/images/banner3.jpg',
						bgc: 'linear-gradient(to top, #fff 0%, #0f6ab4 100%)'
					},
				], // 轮播图数据
				clock: '#345dc2', //背景颜色
				fication: [], // 分类数据
				scrollTop: 0, //滚动条高度
				Hottitle: '热门推荐', //热门推荐
				Hotlist: [], //热门推荐数据
				Mtitle: '免费精选', //免费精选
				mlist: [], //免费精选数据
				eid: 0,
			})
			list({
				current: 1,
				size: 10,
				sort: 'hot'
			}).then(res => {
				console.log(res.data.records);
				data.Hotlist = res.data.records
			})
			list({
				current: 2,
				size: 6,
				isFree: 1
			}).then(res => {
				console.log(res.data.records);
				data.mlist = res.data.records
			})
			onPageScroll((e) => {
				data.scrollTop = e.scrollTop
				if (data.scrollTop > 30) {
					data.clock = '#345dc2'
				} else {
					if (data.eid == 0) {
						data.clock = '#45328c'
					} else if (data.eid == 1) {
						data.clock = '#006C00'
					} else {
						data.clock = '#0072B7'
					}
				}
			})
			swiper().then(res => {
				console.log(res.data);
				data.fication = res.data
			})
			const img = (e) => {
				data.eid = e.detail.current
				// console.log(e.detail.current);
				if (data.scrollTop > 30) {
					data.clock = '#345dc2'
				} else {
					if (e.detail.current == 0) {
						data.clock = '#3a2e5e'
					} else if (e.detail.current == 1) {
						data.clock = '#68ba0f'
					} else {
						data.clock = '#0f6ab4'
					}
				}

			}
			// const backtop =()=>{
			// 	let a = document.documentElement.scrollTop;
			// 	let timer = setInterval(() => {
			// 	if (a > 0) {
			// 	a -= 100;
			// 	window.scrollTo(0, a);
			// 	} else {
			// 	clearInterval(timer);
			// 	}
			// 	}, 10);
			// }
			// 点击热门搜索事件
			const searchClick = (item) => {
				uni.navigateTo({
					url: `/pages/CommodityDetails/CommodityDetails?user=${item}`
				})
				data.searchArr.push({
					name: item
				})
				uni.setStorage({
					key: 'key',
					data: item
				})
			}
			return {
				...toRefs(data),
				img,
				searchClick,
				
			}
		}

	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	.classification {
		width: 90%;
		margin: 20rpx auto 0;

		ul {
			display: flex;
			flex-wrap: wrap;
			list-style: none;
			align-items: center;
			justify-content: space-between;

			li {
				width: 20%;
				text-align: center;
				background-color: rgba(119, 119, 119, 0.1);
				border-radius: 10rpx;
				margin: 5rpx 5rpx;
				padding: 10rpx 0;
				font-size: 30rpx;
			}
		}
	}

	.bgc {
		width: 100%;
		/* background: linear-gradient(to top, #fff 0%, #45328c 100%); */
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 380rpx;
		margin-top: 100rpx;
	}

	.swiper-item {
		display: block;
		width: 100%;
		height: 400rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}

	image {
		width: 90%;
		border-radius: 20rpx;
		height: 92%;
		margin-top: 20rpx;
	}
	.top{
		position: fixed;
		right: 20rpx;
		top: 80%;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
</style>
