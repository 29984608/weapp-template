import _ from '../libs/lodash';

const { request } = wx;

export default class Mock {
  static install = (config, app) => {
    /**
     * 利用 Object.defineProperty 监听 wx.request 方法
     * 判断 url 和 app.js 文件中路径，匹配则直接返回 mock
     * 否则发送网络请求
     */
  }
}
