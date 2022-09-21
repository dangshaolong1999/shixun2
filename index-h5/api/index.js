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
export {
  getbanner,
  getHotList,
  getNewList,
  getCategory,
  getFreeList,
  getisFreeList
}
