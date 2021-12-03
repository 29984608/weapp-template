import { CustomPage, moment } from '/engine/index'

CustomPage({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: moment(log).format('YYYY-MM-DD HH:mm:ss'),
          timeStamp: log
        }
      })
    })
  }
})
