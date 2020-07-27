import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./routes/home";
import find from "./routes/find";
import orderform from "./routes/orderform";
import my from "./routes/my";
import rice from "./routes/rice";
import search from "./routes/search";
import cart from "./routes/cart";
import address from "./routes/address";
import food from "./routes/food";
import purchase from "./routes/purchase";
import breakfast from "./routes/breakfast";
import hamburger from "./routes/hamburger";
import explanation from "./routes/explanation";
import drink from "./routes/drink";
import fastfood from "./routes/fastfood";
import snake from "./routes/snake";
import quality from "./routes/quality";
import member from "./routes/member";
import gold from "./routes/gold";
import publics from "./routes/publics";
import customer from "./routes/customer";
import chat from "./routes/chat";

const routes = [
  {
    path: "/",
    redirect: "/advertpage" //默认进入广告页
  },
  home, // 首页
  find, // 发现
  orderform, // 订单
  ...my, // 我的
  rice, // 木桶饭
  search, // 搜索
  cart, // 订单结算
  ...address, // 地址添加
  food, // 美食
  purchase, // 跑腿代购
  breakfast, // 早餐
  hamburger, // 汉堡薯条
  explanation, // 优惠说明
  drink, // 甜品饮料
  fastfood, // 简餐速食
  snake, // 地方小吃
  quality, // 品质套餐
  member, // 超级会员
  gold, // 金币商城
  ...publics, // 广告页
  customer, // 客服
  chat // 客服聊天
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
