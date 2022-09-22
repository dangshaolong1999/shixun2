import http from './http'
/** 获取轮播图数据*/
const getbanner = () => {
  let data = http.get('article/api/advert/show/1')
  return data
}
/** 获取全部分类接口 */
const getCategory = () => {
  let data = http.get('article/api/category/label/list')
  return data
}
/** 获取热门数据 */
const getHotList = (msg) => {
  let data = http.post('course/api/course/search', msg)
  return data
}
/**获取近期上新数据*/
const getNewList = (msg) => {
  let data = http.post('course/api/course/search', msg)
  return data
}
/**获取免费精品数据*/
const getFreeList = (msg) => {
  let data = http.post('course/api/course/search', msg)
  return data
}
/**获取付费精品数据*/
const getisFreeList = (msg) => {
  let data = http.post('course/api/course/search', msg)
  return data
}
/** 获取阅读头部数据 */
const getReadHeader = () => {
  let data = http.get('article/api/category/label/list ')
  return data
}
/**获取阅读分类推荐数据*/
const getReadList = (msg) => {
  let data = http.post('article/api/article/search', msg)
  return data
}
/** 获取切换分类数据 */
const changeReadList = (msg) => {
  let data = http.post('article/api/article/search', msg)
  return data
}
/** 获取热门回答数据*/
const getHotanswer = (msg) => {
  let data = http.post('question/api/question/hot', msg)
  return data
}
/** 获取最新问题数据*/
const getLatest = (msg) => {
  let data = http.post('question/api/question/new', msg)
  return data
}
/** 获取等待回答数据*/
const getWaitanswer = (msg) => {
  let data = http.post('question/api/question/wait', msg)
  return data
}
export {
  getbanner,
  getHotList,
  getNewList,
  getCategory,
  getFreeList,
  getisFreeList,
  getReadList,
  getReadHeader,
  changeReadList,
  getHotanswer,
  getLatest,
  getWaitanswer
}
