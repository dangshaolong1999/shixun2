import api from '../common/common/js/request.js'

// 详情
// async function detail() {
// 	const {data} = await http.get('/course/api/course/null')
// 	return data
// }
const detail = async () => { 
	let data = await api({
		url: '/course/api/course/null',
		method: 'get',
	})
	return data
}
// 章节
// async function sections() {
// 	const {data} = await http.get('/course/api/chapter/section/list/null')
// 	return data
// }
const sections = async () => { 
	let data = await api({
		url: '/course/api/chapter/section/list/null',
		method: 'get',
	})
	return data
}
// 章节
// async function comment() {
// 	const {data} = await http.get('/course/api/comment/list/null')
// 	return data
// }
const comment = async () => { 
	let data = await api({
		url: '/course/api/comment/list/null',
		method: 'get',
	})
	return data
}
// 套餐
// async function setmeal() {
// 	const {data} = await http.get('/course/api/group/list/null')
// 	return data
// }
const setmeal = async () => { 
	let data = await api({
		url: '/course/api/group/list/null',
		method: 'get',
	})
	return data
}
export {
	detail,
	sections,
	comment,
	setmeal
}