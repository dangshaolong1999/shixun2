import {msg} from './util.js'
let BASE_URL = 'http://m.mengxuegu.com/api/'
// let BASE_URL = '/api'

const request = (options = {}) => {
  return new Promise((resolve,reject) => {
    uni.request({
      url:BASE_URL + options.url,
      method:options.method || 'GET',
      data:options.data || {},
      timeout:8000,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        msg('请求接口失败')
        reject(err)
      }
    })
  })
}

export default request