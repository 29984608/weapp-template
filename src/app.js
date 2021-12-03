import { CustomApp, CustomUI, Mock, WxApi } from '/engine/index'


CustomApp({
  appModules: [CustomUI, Mock, WxApi],
  uiModules: [],
  mock: {},

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({})
  },
  onShow() {},
  globalData: {
    userInfo: null
  }
})
