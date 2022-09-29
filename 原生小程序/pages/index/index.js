// index.js
// 获取应用实例
const app = getApp()
import { getTopCate, getbanner,getFree } from '../../api/api.js'
Page({
  data: {
    //导航
    list: [],
    //轮播
    bannerList: [],
    //免费课
    freeList: [],
    //讲师头像
    avatarList: []
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    getTopCate().then(res => {
      this.setData({
        list: res.data.data
      })
    })
    getbanner().then(res => {
      this.setData({
        bannerList: res.data.data
      })
    })
    getFree().then(res => {
      console.log(res.data.data.course_list);
      this.setData({
        freeList: res.data.data.course_list,
      })
    })   
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
