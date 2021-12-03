let modules = [];
let pageScene = '';
const originPage = Page;
const originComponent = Component;
const systemInfo = wx.getSystemInfoSync();

const getThemeColors = () => {
  const themeVars = `--theme-color: red;`

  return themeVars
}

export const CustomPage = function (config) {
  config.preLoad = [];
  const {
    onLoad = () => { },
    onUnload = () => { },
    onShow = () => { },
    onHide = () => { },
  } = config;
  for (const module of modules) {
    if (module.install) {
      module.install({ component: config, app: appCtx });
    }
  }

  config.onLoad = function (options) {
    const themeColors = getThemeColors();
    if (themeColors) {
      this.setData({ themeColors });
    }
    onLoad.call(this, options);
  }

  config.onShow = function (options) {
    onShow.call(this, options);
  }
  originPage(config)
}

export const CustomComponent = function (config) {
  const { attached, detached } = config;
  for (const module of modules) {
    if (module.install) {
      module.install({ component: config, app: appCtx });
    }
  }

  config.attached = function () {
    const themeColors = getThemeColors();
    if (themeColors) {
      this.setData({ themeColors });
    }
  }

  config.detached = function () {}

  originComponent(config);
}

export default class CustomUI {
  static install = (config, app) => {
    modules = app.uiModules || [];
    pageScene = config?.launchOptions?.scene;
  }
}
