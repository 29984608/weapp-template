const checkForUpdate = () => {
  const updateManager = wx.getUpdateManager();
  updateManager.onUpdateReady(() => {
    // 由于初次进入页面时会多次 redirect 或 reLaunch 页面，iOS 系统上弹框会消失，所以延时等页面稳定后再弹出更新提示
    setTimeout(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        },
      });
    }, 10000);
  });
};

export default function(config) {
  const { onLaunch, onShow, onHide } = config;

  config.onLaunch = function (options) {
    onLaunch.call(this, options);
    checkForUpdate();
  }

  config.onShow = function (options) {
    onShow.call(this, options);
  }

  config.onHide = function (options) {
    const pages = getCurrentPages();
    onHide.call(this, options);
  }

  config.onError = function (err) {
    console.error(err);
  }
}
