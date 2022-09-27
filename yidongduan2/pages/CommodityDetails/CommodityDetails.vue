<!-- 搜索详情 -->
<template>
	<!-- 搜索详情 -->
	<view>
		<div class="top"><span @click='tui'>
				<uni-icons type="back" size="27"></uni-icons>
			</span> <input class="uni-input" confirm-type="search"
				:placeholder="routerId==null ||routerId==''||routerId==0?'请输入要搜索的内容':routerId" /> <span class='top-sp'
				@click='tui'>取消</span> </div>
		<ul class='top-ul'>
			<li v-for="item in topList" @click='topClick(item.name)' :class="{'active':topName==item.name}">
				{{item.name}} </li>
		</ul>


		<!-- 排序开始 -->
		<ul class='top1-ul'>
			<li @click="zongPai('综合排序')" :class="{active:comprehensiveName !=='综合排序'}">{{comprehensiveName}}</li>
			<li v-if="topName =='课程'" @click="zongPai('全部课程')" :class="{active:coursesName !=='全部课程'}">{{coursesName}}
			</li>
			<li @click="zongPai('全部分类')" :class="{active:rigthData !=='全部分类'}">{{rigthData}}</li>
		</ul>
		<!-- 排序结束 -->
		<!-- 遮罩层 开始 -->
		<div class='zhe' @click='zhe' v-if='zheFlag'>
			<div class='tan' v-if="navFlag">
				<ul class='tan-ul1' v-if="centerNavName=='综合排序'">
					<li @click="zong('综合排序')" :class="{'active':comprehensiveName=='综合排序'}" class='quan-li1'>综合排序</li>
					<li @click="zong('最新排序')" :class="{'active':comprehensiveName=='最新排序'}" class='quan-li1'>最新排序</li>
					<li @click="zong('热门排序')" :class="{'active':comprehensiveName=='热门排序'}" class='quan-li1'>热门排序</li>
				</ul>
				<ul class='tan-ul2' v-if="centerNavName=='全部课程'">
					<li>
					<li @click="quan('全部课程')" :class="{'active':coursesName=='全部课程'}" class='quan-li1'>全部课程</li>
					<li @click="quan('付费课程')" :class="{'active':coursesName=='付费课程'}" class='quan-li1'>付费课程</li>
					<li @click="quan('免费课程')" :class="{'active':coursesName=='免费课程'}" class='quan-li1'>免费课程</li>
					</li>
				</ul>
				<!-- .全部分类 开始 -->
				<scroll-view scroll-y="true" style="height: 100%; width: 30%;"
					v-if="centerNavName!='全部课程' &&centerNavName!='综合排序'">
					<view class="Tilte">
						<ul>
							<li :class="{'active2':allInformation=='全部'}" @click.stop="clickAll('全部')">全部</li>
							<li v-for="item in allData" :key="item.id" :class="{'active2':allInformation==item.name }"
								@click.stop="clickAll(item)">{{item.name}}</li>
						</ul>
					</view>
				</scroll-view>
				<ul class='tan-ul3' v-if="centerNavName!='全部课程' &&centerNavName!='综合排序'">
					<li @click="rigthAll('不限')">不限</li>
					<li v-for="item in allDataList" :key="item.id" @click="rigthAll(item.name)">{{item.name}}</li>
				</ul>
			</div>
			<!-- 全部分类结束 -->
		</div>
		<!-- 遮罩层 结束 -->
		<!-- 下方渲染的数据  开始 -->
		<Pages :fuDate="dataList" @click='goGetails'></Pages>
		<!-- 下方渲染的数据  开始 -->
		<div class="bto" v-if="this.dataList.length==70">
			<br>
			<h2>...我是有底线的哦!!!</h2>
			<br>
		</div>
	</view>
</template>

<script>
	import {
		searchXiang,
		searchXiangQuan
	} from '../../api/api.js'
	import Pages from '@/components/components/hengPay/hengPay.vue'
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	export default {
		components: {
			Pages,
		},
		// 接收路由跳转的参数
		onLoad(op) {
			this.routerId = op.user
			// if(op.id=='' ){
			// 	this.rigthData='全部分类'
			// }else{

			this.rigthData = op.id || this.rigthData
			// }
		},
		// 触底事件
		onReachBottom() {
			if (this.dataList.length == 70) return
			// 搜索接口
			searchXiang('vue.js').then((res) => {
				this.dataList = [...this.dataList, ...res.data.records]
			})

		},
		setup() {
			// 搜索接口
			searchXiang('vue.js').then((res) => {
				data.dataList = res.data.records
			})
			// 请求的是全部的接口
			searchXiangQuan().then((res) => {
				data.allData = res.data
				data.allDataList = res.data[0].labelList
				data.allDataListDan = res.data[0].labelList
			})
			const data = reactive({
				navFlag: false, //nav显示隐藏的控制状态
				zheFlag: false, //遮罩层的控制状态
				dataList: [], //搜索的内容存储
				allData: [], //存储的是全部类型的接口
				allDataList: [], //存储全部类型右侧的数据详情
				allDataListDan: [], //单独存储全部类型右侧的数据详情
				centerNavName: '综合排序', //存储中间nav值
				comprehensiveName: '综合排序', //存储的的是综合排序的字段
				coursesName: '全部课程', //存储的的是综合排序的字段
				topName: '课程', //存储头部的点击状态
				allInformation: '全部', //存储全部类型
				rigthData: '全部分类', //存储右侧的点击数据
				routerId: '', //存储的是路由跳转的信息
				opIdL: '', //存储的是分类调过来的参数
				topList: [{
						name: '课程'
					},
					{
						name: '文章'
					},
					{
						name: '问答'
					},
				], //存储头部的数据

			})
			// 点击全部的左侧详情事件
			const clickAll = (item) => {
				data.allInformation = item.name
				if (item == '全部') {
					data.allInformation = '全部'
					data.allDataList = data.allDataListDan
				} else {

					data.allDataList = item.labelList
				}
			}
			// 右侧的点击事件
			const rigthAll = (item) => {
				if (item == '不限') {
					searchXiang("云计算").then((res) => {
						data.dataList = res.data.records
					})
					data.rigthData = data.allInformation
				} else {
					data.rigthData = item
					// 搜索接口
					searchXiang(item).then((res) => {
						data.dataList = res.data.records
					})
				}
				data.navFlag = false
				data.zheFlag = false
			}
			// 点击中间的nav事件
			const zongPai = (item) => {
				data.centerNavName = item
				data.navFlag = true
				data.zheFlag = true

			}
			// 点击遮罩层事件
			const zhe = () => {
				data.zheFlag = false
				data.navFlag = false
			}
			// 点击头部的三个状态
			const topClick = (item) => {
				data.topName = item

			}
			// 点击综合排序
			const zong = (item) => {
				searchXiang('Java').then((res) => {
					data.dataList = res.data.records
				})
				data.comprehensiveName = item
			}

			// 点击全部课程 
			const quan = (item) => {
				data.coursesName = item
				searchXiang('人工智能').then((res) => {
					data.dataList = res.data.records
				})
			}
			// 返回上一级路由
			const tui = () => {
				uni.navigateBack({});
			}
			// 跳转到详情页
			const goGetails = () => {
				uni.navigateTo({
					url: "/pages/detailView/detailView"
				})
			}

			return {
				...toRefs(data),
				zong,
				quan,
				topClick,
				zongPai,
				zhe,
				clickAll,
				rigthAll,
				tui,
				goGetails
			}
		}
	}
</script>

<style lang="scss">
	.top {
		padding-top: 10px;
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 10px;
	}

	.top-sp {
		font-weight: 900;
		font-size: 36rpx;
	}

	.uni-input {
		border: 1px solid black;
		width: 70%;
		height: 50rpx;
		border-radius: 20px;
		padding-left: 20px;
	}

	.bto {
		width: 100%;
		text-align: center;
	}

	.tan-ul3 {
		position: absolute;
		top: 20px;
		left: 40%;
		display: flex;
		flex-wrap: wrap;

		li {
			font-size: 12px;
			line-height: 30px;
			border: 1px solid #999;
			border-radius: 15px;
			min-width: 80px;
			text-align: center;
			padding: 0 2px;
			margin: 7px 2px;
		}
	}

	.Tilte {
		width: 100%;
		background-color: #efeff4;

		ul li {
			text-align: center;
			font-size: 15px;
			color: #888;
			width: 100px;
			line-height: 20px;
			padding: 10px 3px;
		}
	}

	.zhe {
		padding-top: 100rpx;
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .5);
		z-index: 99999999999999999999999999999999999999;
	}

	.active {
		color: #007aff;
	}

	.active2 {
		color: #345dc2 !important;
		border-left: 3px solid #345dc2;
		font-weight: 900;
		transition: .3s;
	}

	.tan {

		.tan-ul1,
		.tan-ul2 {
			padding-left: 42px;

			li {
				height: 60rpx;
				line-height: 60rpx;
			}
		}

		.quan-li1 {
			padding: 10px 0;
			border-bottom: 1px solid #efeff4;
		}
	}

	.tan {
		height: 200px;
		padding: 20px;
		z-index: 100;
		background-color: #fff;
		position: absolute;
		left: 0;
		right: 0;
	}

	.top1-ul {
		display: flex;
		height: 80rpx;

		li {
			flex: 1;
			text-align: center;
			height: 80rpx;
			line-height: 80rpx;
		}
	}

	.top-ul {
		display: flex;
		height: 80rpx;
		border-bottom: 1px solid #efeff4;

		li {
			flex: 1;
			text-align: center;
			height: 80rpx;
			line-height: 80rpx;
		}

	}
	li{
		list-style: none;
	}
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
</style>
