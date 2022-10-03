import http from '../http.js'
import * as TS from '../interface'
// export const switchlist = () => {
// 	http('/home/swiperdata').then((res)=> res,
// 	(err)=>err)
// }
// 轮播图
export const switchlist = async() => {
	let data = await http({
		url:'/home/swiperdata',
		method:'get'
	})
	return data
}
// nav导航栏
export const nav1 = async() => {
	let data = await http({
		url:'/home/catitems',
		method:'get'
	})
	return data
}
// 楼层数据
export const floorList = async() => {
	let data = await http({
		url:'/home/floordata',
		method:'get'
	})
	return data
}
// 分类数据
export const categories = async() => {
	let data = await http({
		url:'/categories',
		method:'get'
	})
	return data
}
// 搜索接口
export const qsearch = async(query) => {
	let data = await http({
		url:`/goods/qsearch`,
		method:'get',
		data:{
			query
		}
	})
	return data
}
// 商品详情
export const detail = async(goods_id) => {
	let data = await http({
		url:`/goods/detail`,
		method:'get',
		data:{
			goods_id
		}
	})
	return data
}