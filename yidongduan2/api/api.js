import api from '../common/common/js/request.js'

const swiper = async () => { //轮播图
	let data = await api({
		url: 'article/api/category/label/list',
		method: 'get',
	})
	return data
}
const list = async (item) => {
	let data = await api({
		url: "course/api/course/search",
		method: 'POST',
		data: item
	})
	return data
}
const list1 = async (item) => {
	let data = await api({
		url: "article/api/article/search",
		method: 'POST',
		data: item
	})
	return data
}
const floor = async () => { //楼层
	let data = await api({
		url: 'home/floordata'
	})
	return data
}
// export const floor = async () => { //楼层   这是一种导出方式
// 	let data = await api({
// 		url: 'home/floordata'
// 	})
// 	return data
// }
//热门回答
const hot = async (item) => {
	let data = await api({
		url:'question/api/question/hot',
		method: 'POST',
		data: item
	})
	return data
}
//最新问题
const new1 = async (item) => {
	let data = await api({
		url:'question/api/question/new',
		method: 'POST',
		data: item
	})
	return data
}
//等待回答
const wait = async (item) => {
	let data = await api({
		url:'question/api/question/wait',
		method: 'POST',
		data: item
	})
	return data
}
//验证码
const Code = async (item) => {
	let data = await api({
		url:'system/sms/code',
		method: 'POST',
		data: item
	})
	return data
}
//登录成功
const succeeded = async (item) => {
	let data = await api({
		url:'auth/login',
		method: 'POST',
		data: item
	})
	return data
}
//修改手机号
const modifyTel = async (item) => {
	let data = await api({
		url:'auth/user/mobile',
		method: 'PUT',
		data: item
	})
	return data
}
//修改昵称
const modifyName = async (item) => {
	let data = await api({
		url:'system/user',
		method: 'PUT',
		data: item
	})
	return data
}
//意见反馈
const feedback = async (item) => {
	let data = await api({
		url:'system/api/feedback',
		method: 'POST',
		data: item
	})
	return data
}
//我的订单
const pay = async (item) => {
	let data = await api({
		url:'pay/order/user/list',
		method: 'GET',
		data: item
	})
	return data
}
//我的余额
const balance = async (item) => {
	let data = await api({
		url:'pay/user/balance',
		method: 'GET',
		data: item
	})
	return data
}
//我的学习
const course = async (item) => {
	let data = await api({
		url:'course/course/study/list',
		method: 'GET',
		data: item
	})
	return data
}
//问答详情
const article = async (id) => {
	let data = await api({
		url:`article/api/article/${id}`,
		method: 'GET'
	})
	return data
}
//问答评论

const articlelist = async (id) => {
	let data = await api({
		url:`article/api/comment/list/${id}`,
		method: 'GET'
	})
	return data
}
//新增评论
const comment = async (item) => {
	let data = await api({
		url:`article/comment`,
		method: 'POST',
		data: item
	})
	return data
}
//问答品论
const question = async (id) => {
	let data = await api({
		url:`question/api/question/${id}`,
		method: 'GET'
	})
	return data
}
// 搜索的详情
const searchXiang= async (page) => {
	let data = await api({
		url: `/course/api/course/search`,
		data:{content:page},
		method:'post',
	})
	return data
	
}

// 搜索的详情的全部接口
const searchXiangQuan= async () => {
	let data = await api({
		url: `article/api/category/label/list`,
	})
	return data
	
}
export { //这是另一种导出方式
searchXiang,
searchXiangQuan,
	swiper,
	list,
	floor,
	list1,
	hot,
	new1,
	wait,
	Code,
	succeeded,
	modifyTel,
	modifyName,
	feedback,
	pay,
	balance,
	course,
	article,
	articlelist,
	comment,
	question
}
