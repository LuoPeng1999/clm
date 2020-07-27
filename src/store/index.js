import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import cart from "./rice/cart";
import address from "./rice/address";
import order from "./rice/order";
import login from "./my/login";
import search from "./home/search";
import coupon from "./rice/coupon";

export default new Vuex.Store({
  state: {
    vanTabbar: true, // 默认显示底部导航 false 不显示导航
    active: 0
  },
  mutations: {},
  actions: {},
  modules: {
    cart, // 订单
    address, // 地址
    order, // 订单+地址等信息
    login, // 登录
    search, // 搜索
    coupon // 优惠券
  }
});
