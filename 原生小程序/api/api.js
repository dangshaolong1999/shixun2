import request  from '../http/http' //引入上面封装好的请求方法
// 选课考试分类
// const getTopCate = () => {
//   return http({
//     url:'home/getFirstClassify'
//   })
// }
//请求轮播
 const getTopCate=(data = {})=> {
    return request({
        // baseURL: hostConfig.xxx,
        url: "app/home/getSecondClassify/1?classify_id=1",
        method: "GET",
        data,
    });
}
//请求导航
const getbanner=(data = {})=> {
    return request({
        // baseURL: hostConfig.xxx,
        url: "app/home/banner/1/4",
        method: "GET",
        data,
    });
}
//请求免费直播课
const getFree = (data = {}) => {
    return request({
        url: "app/home/marketingCourse/1?classify_id=1",
        method: "GET",
        data,
    })
}
export {
    getTopCate,
    getbanner,
    getFree
}
